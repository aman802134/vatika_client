import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

const ApiService = {
  getProduct: async () => {
    const response = await api.get("/products");
    return response.data;
  },

  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  createProduct: async (data) => {
    const response = await api.post("/create-product", data);
    return response.data;
  },

  updateProduct: async (id, data) => {
    const response = await api.put(`/update-product/${id}`, data);
    return response.data;
  },

  patchProduct: async (id, data) => {
    const response = await api.patch(`/update-product/${id}`, data);
    return response.data;
  },

  deleteProduct: async (id) => {
    const response = await api.delete(`/delete-product/${id}`);
    return response.data;
  },
};

export default ApiService;