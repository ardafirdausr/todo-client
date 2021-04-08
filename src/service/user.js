export const getUser = () => {
	let user = window.localStorage.getItem('user');
	return user
		? JSON.parse(user)
		: null;
};

export const setUser = (user) => {
	let userJsonString = JSON.stringify(user);
	window.localStorage.setItem('user', userJsonString);
};
