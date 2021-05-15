import axios from 'axios'

import { endpoint } from '../config/api';
// import { useUserContext } from "../contexts/user"

const axiosApiInstance = axios.create({baseURL: endpoint, timeout: 5000});

axiosApiInstance.interceptors.request.use(
  async config => {
    config.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    let token = window.localStorage.getItem('todo_auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config;
  },
  error => {
    Promise.reject(error)
});

// axiosApiInstance.interceptors.response.use(
//   response => response,
//   error => {
//     // let { setUser } = useUserContext();
//     console.log(error)
//     if (error.response.status === 401) {
//       window.localStorage.removeItem("todo_auth_token");
//       // setUser(null)
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosApiInstance;