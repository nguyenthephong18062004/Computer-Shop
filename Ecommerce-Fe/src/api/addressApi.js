import axiosClient from "./axiosClient";

const addressApi = {
  getProvinces() {
    const url = `/api/v1/locations/provinces`;
    return axiosClient.get(url);
  },
  getDistricts(provinceId) {
    const url = `/api/v1/locations/districts/${provinceId}`;
    return axiosClient.get(url);
  },
  getWards(districtId) {
    const url = `/api/v1/locations/wards/${districtId}`;
    return axiosClient.get(url);
  },
};

export default addressApi;

