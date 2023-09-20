const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export const endpoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    createProduct: `${API}/api/${VERSION}/products/`,
    getAllProducts: `${API}/api/${VERSION}/products`,
  },
  users: {
    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    updateUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    getAllUsers: `${API}/api/${VERSION}/users`,
    createUser: `${API}/api/${VERSION}/users`,
    checkEmail: `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getAllProductsByCategory: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    createCategory: `${API}/api/${VERSION}/categories`,
    getAllCategories: `${API}/api/${VERSION}/categories`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (fileName) => `${API}/api/${VERSION}/files/${fileName}`,
  },
};
