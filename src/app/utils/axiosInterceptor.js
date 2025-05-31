import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ekg.pythonanywhere.com/', 
//   timeout: 10000, 
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // You can redirect to login or show a message
        window.location.href = '/login';
        console.error('Unauthorized! Please login again.');
      } else if (error.response.status === 500) {
        console.error('Server error! Please try again later.');
      }
    }
    return Promise.reject(error);
  }
);

export default api;
