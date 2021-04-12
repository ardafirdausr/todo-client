import axios from 'axios'

import { endpoint } from '../config/api';

const axiosApiInstance = axios.create({baseURL: endpoint, timeout: 5000});

axiosApiInstance.interceptors.request.use(
  async config => {
    let user = window.localStorage.getItem('user');
		if (!user) {
			return config
		}

		user = JSON.parse(user)
		let token = `Bearer ${user.token}`
    config.headers = {
      'Authorization': token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

export default axiosApiInstance;