const Location = require("./../models/locationModel");
const factory = require("./handlerFactory");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const axios = require("axios");

// Simple in-memory cache (in production, use Redis or similar)
const cache = {
  provinces: null,
  districts: {},
  wards: {},
  expiry: 24 * 60 * 60 * 1000, // 24 hours
  timestamps: {
    provinces: null,
    districts: {},
    wards: {}
  }
};

exports.getAllLocations = factory.getAll(Location);
exports.getLocation = factory.getOne(Location);

exports.nearestLocation = catchAsync(async (req, res, next) => {
  const { latitude, longitude } = req.query;
  const nearestLocationPromise = Location.findOne({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [parseFloat(longitude), parseFloat(latitude)],
        },
      },
    },
  });

  const listLocationPromise = Location.find();

  const [nearestLocation, listLocation] = await Promise.all([
    nearestLocationPromise,
    listLocationPromise,
  ]);
  res.status(201).json({
    status: "success",
    data: {
      listLocation,
      nearestLocation
    },
  });
});

exports.createLocation = catchAsync(async (req, res, next) => {
  const { name, address, latitude, longitude } = req.body;

  if (!address || !latitude || !longitude)
    return next(new AppError("Vui lòng cung cấp đầy đủ thông tin", 400));
  const newLocation = new Location({
    name,
    address,
    location: {
      coordinates: [longitude, latitude],
    },
  });

  await newLocation.save();
  res.status(201).json({
    status: "success",
    message: "Tạo mới địa chỉ thành công",
    data: {
      data: newLocation,
    },
  });
});
exports.updateLocation = catchAsync(async (req, res, next) => {
  const { name, address, latitude, longitude } = req.body;

  if (!address || !latitude || !longitude)
    return next(new AppError("Vui lòng cung cấp đầy đủ thông tin", 400));

  const updatedAddress = await Address.findByIdAndUpdate(
    id,
    {
      name,
      address,
      location: {
        coordinates: [longitude, latitude],
      },
    },
    { new: true, runValidators: true }
  );
  if (!updatedAddress) {
    return next(new AppError("Không tìm thấy địa chỉ này"), 404);
  }
  res.status(200).json({
    status: "success",
    message: "Cập nhật địa chỉ thành công",
    data: {
      data: updatedAddress,
    },
  });
});
exports.deleteLocation = factory.deleteOne(Location);

exports.getTableLocation = factory.getTable(Location);

// Get all provinces (Tỉnh/Thành phố)
exports.getProvinces = catchAsync(async (req, res, next) => {
  const now = Date.now();
  
  // Check cache
  if (cache.provinces && cache.timestamps.provinces && 
      (now - cache.timestamps.provinces) < cache.expiry) {
    return res.status(200).json({
      status: "success",
      data: cache.provinces
    });
  }

  try {
    const response = await axios.get("https://provinces.open-api.vn/api/", {
      timeout: 10000
    });
    // API returns array directly, transform to match expected format
    const provinces = response.data.map(p => ({
      code: p.code,
      name: p.name
    }));
    cache.provinces = provinces;
    cache.timestamps.provinces = now;
    
    res.status(200).json({
      status: "success",
      data: provinces
    });
  } catch (error) {
    console.error("Error fetching provinces:", error.message);
    return next(new AppError(`Không thể lấy danh sách tỉnh/thành phố: ${error.message}`, 500));
  }
});

// Get districts by province ID (Quận/Huyện)
exports.getDistricts = catchAsync(async (req, res, next) => {
  const { provinceId } = req.params;
  
  if (!provinceId) {
    return next(new AppError("Vui lòng cung cấp mã tỉnh/thành phố", 400));
  }

  const now = Date.now();
  
  // Check cache
  if (cache.districts[provinceId] && cache.timestamps.districts[provinceId] && 
      (now - cache.timestamps.districts[provinceId]) < cache.expiry) {
    return res.status(200).json({
      status: "success",
      data: cache.districts[provinceId]
    });
  }

  try {
    const response = await axios.get(
      `https://provinces.open-api.vn/api/p/${provinceId}?depth=2`,
      {
        timeout: 10000
      }
    );
    // Transform districts to match expected format
    const districts = (response.data.districts || []).map(d => ({
      code: d.code,
      name: d.name
    }));
    cache.districts[provinceId] = districts;
    cache.timestamps.districts[provinceId] = now;
    
    res.status(200).json({
      status: "success",
      data: districts
    });
  } catch (error) {
    console.error("Error fetching districts:", error.message);
    return next(new AppError(`Không thể lấy danh sách quận/huyện: ${error.message}`, 500));
  }
});

// Get wards by district ID (Phường/Xã)
exports.getWards = catchAsync(async (req, res, next) => {
  const { districtId } = req.params;
  
  if (!districtId) {
    return next(new AppError("Vui lòng cung cấp mã quận/huyện", 400));
  }

  const now = Date.now();
  
  // Check cache
  if (cache.wards[districtId] && cache.timestamps.wards[districtId] && 
      (now - cache.timestamps.wards[districtId]) < cache.expiry) {
    return res.status(200).json({
      status: "success",
      data: cache.wards[districtId]
    });
  }

  try {
    const response = await axios.get(
      `https://provinces.open-api.vn/api/d/${districtId}?depth=2`,
      {
        timeout: 10000
      }
    );
    // Transform wards to match expected format
    const wards = (response.data.wards || []).map(w => ({
      code: w.code,
      name: w.name
    }));
    cache.wards[districtId] = wards;
    cache.timestamps.wards[districtId] = now;
    
    res.status(200).json({
      status: "success",
      data: wards
    });
  } catch (error) {
    console.error("Error fetching wards:", error.message);
    return next(new AppError(`Không thể lấy danh sách phường/xã: ${error.message}`, 500));
  }
});
