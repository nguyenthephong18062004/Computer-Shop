const { Op } = require('sequelize');

class APIFeatures {
  constructor(model, queryString) {
    this.model = model;
    this.queryString = queryString;
    this.where = {};
    this.include = [];
    this.attributes = null;
    this.order = [];
    this.limit = null;
    this.offset = null;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields', 'keyword'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // Handle keyword search
    if (this.queryString.keyword) {
      this.where[Op.or] = [
        { title: { [Op.like]: `%${this.queryString.keyword}%` } },
        { description: { [Op.like]: `%${this.queryString.keyword}%` } }
      ];
    }

    // Handle price and promotion ranges
    if (this.queryString.price) {
      const priceObj = typeof this.queryString.price === 'object' ? this.queryString.price : {};
      if (priceObj.gte) this.where.price = { ...this.where.price, [Op.gte]: priceObj.gte };
      if (priceObj.gt) this.where.price = { ...this.where.price, [Op.gt]: priceObj.gt };
      if (priceObj.lte) this.where.price = { ...this.where.price, [Op.lte]: priceObj.lte };
      if (priceObj.lt) this.where.price = { ...this.where.price, [Op.lt]: priceObj.lt };
    }

    if (this.queryString.promotion) {
      const promoObj = typeof this.queryString.promotion === 'object' ? this.queryString.promotion : {};
      if (promoObj.gte) this.where.promotion = { ...this.where.promotion, [Op.gte]: promoObj.gte };
      if (promoObj.gt) this.where.promotion = { ...this.where.promotion, [Op.gt]: promoObj.gt };
      if (promoObj.lte) this.where.promotion = { ...this.where.promotion, [Op.lte]: promoObj.lte };
      if (promoObj.lt) this.where.promotion = { ...this.where.promotion, [Op.lt]: promoObj.lt };
    }

    // Handle other filters with $in (comma-separated values)
    Object.keys(queryObj).forEach((key) => {
      if (key !== 'price' && key !== 'promotion' && queryObj[key]) {
        if (typeof queryObj[key] === 'string' && queryObj[key].includes(',')) {
          this.where[key] = { [Op.in]: queryObj[key].split(',') };
        } else {
          this.where[key] = queryObj[key];
        }
      }
    });

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',');
      sortBy.forEach((sortField) => {
        if (sortField.startsWith('-')) {
          this.order.push([sortField.substring(1), 'DESC']);
        } else {
          this.order.push([sortField, 'ASC']);
        }
      });
    } else {
      this.order.push(['id', 'DESC']);
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').map((f) => f.trim());
      this.attributes = fields;
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.limit = limit;
    this.offset = skip;

    return this;
  }

  async execute() {
    const options = {
      where: Object.keys(this.where).length > 0 ? this.where : undefined,
      include: this.include.length > 0 ? this.include : undefined,
      attributes: this.attributes,
      order: this.order.length > 0 ? this.order : undefined,
      limit: this.limit,
      offset: this.offset
    };

    // Remove undefined values
    Object.keys(options).forEach((key) => {
      if (options[key] === undefined) {
        delete options[key];
      }
    });

    return await this.model.findAll(options);
  }

  async count() {
    const options = {
      where: Object.keys(this.where).length > 0 ? this.where : undefined
    };

    // Remove undefined values
    Object.keys(options).forEach((key) => {
      if (options[key] === undefined) {
        delete options[key];
      }
    });

    return await this.model.count(options);
  }
}

module.exports = APIFeatures;
