import axiosClient from "./axiosClient";
const testApi = {
  login: (info) => {
    const url = "/user/login";
    return axiosClient.post(url, JSON.stringify(info));
  },
  getUserInfo: (user_id) => {
    const url = "/user";
    return axiosClient.get(`${url}/${user_id}`);
  },
  verifyToken: (token) => {
    const url = "/user/verify-token";
    return axiosClient.post(url, { token: token });
  },
  signUp: (user_info) => {
    const url = "/customer/register";
    return axiosClient.post(url, { ...user_info });
  },
  createProduct: (product_info) => {
    const url = "/product";
    return axiosClient.post(url, JSON.stringify(product_info));
  },
  deleteProduct: (product_id) => {
    const url = "/product";
    return axiosClient.delete(`${url}/${product_id}`);
  },
  getAllProducts: () => {
    const url = "/product";
    return axiosClient.get(url);
  },
  getProduct: (product_id) => {
    const url = "/product";
    return axiosClient.get(`${url}/${product_id}`);
  },
};

export default testApi;
