import axios from 'axios'
// TODO: fix this
import { endpoint } from '../config/api';

const getUser = () => {
	const auth = window.localStorage.getItem('user');
	return auth
		? JSON.parse(auth)
		: null;
};

let authUser = getUser();
let token = "";
if (authUser) {
	token = `Bearer ${authUser.token}`
}

const API = axios.create({
	baseURL: endpoint,
	timeout: 5000,
	headers: {
		common: {
			"Authorization": `Bearer ${token}`,
		},
		post: {
			"Accept": "application/json",
			"Content-Type": "application/json",
		}
	}
});

export default API
