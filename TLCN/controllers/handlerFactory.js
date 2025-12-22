const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const APIFeatures = require("./../utils/apiFeatures");
const { Op } = require("sequelize");
const Product = require("./../models/productModel");
const Review = require("./../models/reviewModel");
const Order = require("./../models/orderModel");
const Import = require("./../models/importModel");
const User = require("./../models/userModel");
const Comment = require("./../models/commentModel");

function handleQuery(req, value) {
  const obj = {};
  if (req.query[value + "_lt"] != undefined) obj.lt = req.query[value + "_lt"];
  if (req.query[value + "_lte"] != undefined)
    obj.lte = req.query[value + "_lte"];
  if (req.query[value + "_gt"] != undefined) obj.gt = req.query[value + "_gt"];
  if (req.query[value + "_gte"] != undefined)
    obj.gte = req.query[value + "_gte"];
  if (JSON.stringify(obj) !== "{}") req.query[value] = obj;
}

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    if (Model == Import) {
      const invoice = await Model.findByPk(req.params.id);
      if (invoice && invoice.invoice) {
        for (const value of invoice.invoice) {
          const product = await Product.findByPk(value.product);
          if (product) {
            await Product.update(
              { inventory: product.inventory - value.quantity },
              { where: { id: value.product } }
            );
          }
        }
      }
    }
    const doc = await Model.findByPk(req.params.id);
    if (!doc) {
      return next(new AppError("Không tìm thấy dữ liệu với ID này", 404));
    }

    if (Model == Comment) {
      const children = await Comment.findAll({ where: { parentId: doc.id } });
      for (const child of children) {
        await child.destroy();
      }
      if (doc.parentId) {
        // Remove this comment from parent's children (if using JSON field)
        // Since we're using parentId foreign key, this is handled automatically
      }
    }
    
    if (Model == Review && doc.productId) {
      await doc.destroy();
      await Review.calcAverageRatings(doc.productId);
      return res.status(204).json({
        status: "success",
        data: null,
      });
    }

    await doc.destroy();
    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    if (Model == Product) {
      req.body.updatedBy = req.user.id;
      req.body.updatedAt = new Date(Date.now() - 1000);
      if (req.body.description) {
        req.body.description = req.body.description
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
      }
      if (req.body.promotion && req.body.promotion >= req.body.price) {
        return next(new AppError("Giá giảm phải nhỏ hơn giá gốc", 500));
      }
      const doc = await Model.findByPk(req.params.id);
      if (!doc) {
        return next(new AppError("Không tìm thấy dữ liệu với ID này", 404));
      }
      await doc.update(req.body);
      const updatedDoc = await Model.findByPk(req.params.id, {
        include: [
          { model: require('../models/categoryModel'), as: 'category', attributes: ['name'] },
          { model: require('../models/brandModel'), as: 'brand', attributes: ['name'] },
          { model: require('../models/userModel'), as: 'createdByUser', attributes: ['name'] }
        ]
      });

      res.status(200).json({
        status: "success",
        data: {
          data: updatedDoc,
        },
      });
      return;
    }
    if (Model == Review || Model == Comment) {
      req.body.updateAt = new Date(Date.now() - 1000);
    }
    if (Model == Import) {
      const invoice = await Model.findByPk(req.params.id);
      if (invoice && invoice.invoice) {
        for (const value of invoice.invoice) {
          const product = await Product.findByPk(value.product);
          if (product) {
            await Product.update(
              { inventory: product.inventory - value.quantity },
              { where: { id: value.product } }
            );
          }
        }
      }
      const product = req.body.invoice;
      if (product) {
        for (const value of product) {
          const prod = await Product.findByPk(value.product);
          if (prod) {
            await Product.update(
              { inventory: prod.inventory + value.quantity },
              { where: { id: value.product } }
            );
          }
        }
      }
    }

    const doc = await Model.findByPk(req.params.id);
    if (!doc) {
      return next(new AppError("Không tìm thấy dữ liệu với ID này", 404));
    }
    await doc.update(req.body);
    
    if (Model == Review && doc.productId) {
      await Review.calcAverageRatings(doc.productId);
    }

    const updatedDoc = await Model.findByPk(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        data: updatedDoc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    if (Model == Product) {
      req.body.createdBy = req.user.id;
    }
    if (Model == Order) {
      const cart = req.body.cart;
      for (const value of cart) {
        const name =
          value.product && value.product.title
            ? value.product.title.length > 39
              ? value.product.title.slice(0, 40)
              : value.product.title
            : "Sản phẩm";
        const invent = await Product.findByPk(value.id);
        if (!invent || value.quantity > invent.inventory) {
          return next(
            new AppError(`Số lượng hàng ${name} trong kho không đủ`, 500)
          );
        }
      }

      const doc = await Model.create(req.body);
      for (const value of cart) {
        const product = await Product.findByPk(value.id);
        if (product) {
          await Product.update(
            { inventory: product.inventory - value.quantity },
            { where: { id: value.id } }
          );
        }
      }

      return res.status(201).json({
        status: "success",
        data: {
          id: doc.id,
          totalPrice: doc.totalPrice,
        },
      });
    }

    if (Model == Import) {
      const invoice = req.body.invoice;
      if (invoice) {
        for (const value of invoice) {
          const product = await Product.findByPk(value.product);
          if (product) {
            await Product.update(
              { inventory: product.inventory + value.quantity },
              { where: { id: value.product } }
            );
          }
        }
      }
    }

    const doc = await Model.create(req.body);
    if (Model === Comment && req.body.parentId) {
      // Comment children are handled via foreign key relationship
      // No need to manually update parent
    }
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    const include = [];
    
    if (popOptions && popOptions.path === 'reviews') {
      include.push({
        model: Review,
        as: 'reviews',
        include: [{ model: User, as: 'user', attributes: ['name', 'avatar'] }]
      });
    }

    // Add common includes for Product
    if (Model == Product) {
      include.push(
        { model: require('../models/categoryModel'), as: 'category', attributes: ['name'] },
        { model: require('../models/brandModel'), as: 'brand', attributes: ['name'] },
        { model: require('../models/userModel'), as: 'createdByUser', attributes: ['name'] }
      );
    }

    // Add includes for Review/Comment
    if (Model == Review || Model == Comment) {
      include.push({ model: User, as: 'user', attributes: ['name', 'avatar'] });
    }

    // Add includes for Order/Import
    if (Model == Order || Model == Import) {
      include.push({ model: User, as: 'user', attributes: ['name', 'email'] });
    }

    const doc = await Model.findByPk(req.params.id, {
      include: include.length > 0 ? include : undefined
    });

    if (!doc) {
      return next(new AppError("Không tìm thấy dữ liệu với ID này", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    handleQuery(req, "price");
    handleQuery(req, "promotion");
    
    let filter = {};
    if (req.params.productId) filter.productId = req.params.productId;
    if (Model == Comment) filter.parentId = null;

    const features = new APIFeatures(Model, req.query);
    
    // Apply filter
    if (Object.keys(filter).length > 0) {
      features.where = { ...features.where, ...filter };
    }
    
    features.filter();
    
    // Add includes
    if (Model == Product) {
      features.include = [
        { model: require('../models/categoryModel'), as: 'category', attributes: ['name'] },
        { model: require('../models/brandModel'), as: 'brand', attributes: ['name'] },
        { model: require('../models/userModel'), as: 'createdByUser', attributes: ['name'] }
      ];
    }
    
    if (Model == Review || Model == Comment) {
      features.include = [{ model: User, as: 'user', attributes: ['name', 'avatar'] }];
    }

    if (Model == Order || Model == Import) {
      features.include = [{ model: User, as: 'user', attributes: ['name', 'email'] }];
    }

    if (Model == Comment && filter.parentId === null) {
      features.include = [
        { model: User, as: 'user', attributes: ['name', 'avatar', 'role'] },
        { 
          model: Comment, 
          as: 'children',
          include: [{ model: User, as: 'user', attributes: ['name', 'avatar', 'role'] }]
        }
      ];
    }

    features.sort();
    features.limitFields();
    features.paginate();
    
    const doc = await features.execute();
    let totalPage = 1;

    if (Model == Review && req.params.productId) {
      const product = await Product.findByPk(req.params.productId);
      if (product) {
        const totalFilter = await Review.count({ where: { productId: req.params.productId } });
        if (req.query.page != undefined) {
          totalPage = Math.ceil(totalFilter / Number(req.query.limit || 100));
        }
        if (req.query.page && req.query.page > totalPage) {
          return res.status(200).json({
            status: "success",
            data: {
              data: doc,
              results: doc.length,
              ratingsQuantity: product.ratingsQuantity,
              ratingsAverage: product.ratingsAverage,
              eachRating: product.eachRating,
              totalPage: 1,
            },
          });
        }
        return res.status(200).json({
          status: "success",
          data: {
            data: doc,
            results: doc.length,
            ratingsQuantity: product.ratingsQuantity,
            ratingsAverage: product.ratingsAverage,
            eachRating: product.eachRating,
            totalPage,
          },
        });
      }
    }

    if (req.query.page != undefined) {
      const countFeatures = new APIFeatures(Model, req.query);
      if (Object.keys(filter).length > 0) {
        countFeatures.where = { ...countFeatures.where, ...filter };
      }
      countFeatures.filter();
      const filterDataCount = await countFeatures.count();
      totalPage = Math.ceil(filterDataCount / Number(req.query.limit || 100));
      if (req.query.page > totalPage) {
        return res.status(200).json({
          status: "success",
          data: {
            data: doc,
            results: doc.length,
            totalPage: 1,
          },
        });
      }
    }
    
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
        totalPage,
        currentPage: req.query.page || 1,
      },
    });
  });

exports.getTable = (Model) =>
  catchAsync(async (req, res, next) => {
    const { Op } = require("sequelize");
    let where = {};
    
    if (req.query.search && req.query.search.value) {
      const searchStr = req.query.search.value;
      where[Op.or] = [
        { title: { [Op.like]: `%${searchStr}%` } },
        { name: { [Op.like]: `%${searchStr}%` } },
        { email: { [Op.like]: `%${searchStr}%` } }
      ];
    }
    
    if (Model == User) {
      where.role = { [Op.ne]: "admin" };
    }

    const recordsTotal = await Model.count();
    const recordsFiltered = await Model.count({ where });

    const results = await Model.findAll({
      where,
      limit: Number(req.query.length || 10),
      offset: Number(req.query.start || 0),
      order: [['id', 'DESC']]
    });

    const data = {
      draw: req.query.draw,
      recordsFiltered: recordsFiltered,
      recordsTotal: recordsTotal,
      data: results,
    };
    res.status(200).json(data);
  });

exports.checkPermission = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByPk(req.params.id, {
      include: [{ model: User, as: 'user', attributes: ['id', 'role'] }]
    });
    
    if (!doc) {
      return next(new AppError("Không tìm thấy dữ liệu với ID này", 404));
    }

    const docUserId = doc.userId || (doc.user && doc.user.id);
    if (req.user.id != docUserId && req.user.role == "user") {
      return next(new AppError("Bạn không có quyền để thực hiện", 403));
    }
    
    if (Model == Order) {
      req.order = doc;
    }
    next();
  });
