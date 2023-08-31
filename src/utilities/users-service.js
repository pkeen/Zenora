// Service modules export app logic such as managing tokens
// service modules often depend on API modules for making AJAX requests to server

import sendRequest from "./send-request";
import * as usersAPI from "./users-api";

export const signUp = async (userData) => {
	const token = await usersAPI.signUp(userData);
	// persist token in localStorage
	localStorage.setItem("token", token);
	// return user from token
	return getUser();
};

export const logIn = async (userData) => {
	const token = await usersAPI.logIn(userData);
	// persist token in localStorage
	localStorage.setItem("token", token);
	// return user from token
	return getUser();
};

export const logOut = async () => {
	localStorage.removeItem("token");
	return getUser();
};

export const getToken = () => {
	// will return null if token does not exist
	const token = localStorage.getItem("token");
	if (!token) return null;
	const payload = JSON.parse(atob(token.split(".")[1]));
	// A JWTs exp property is expressed in seconds not miliseconds
	if (payload.exp * 1000 < Date.now()) {
		// token has expired
		localStorage.removeItem("token");
		return null;
	}
	return token;
};

export const getUser = () => {
	const token = getToken();
	return token ? JSON.parse(atob(token.split(".")[1])).user : null;
};

export const checkToken = async () => {
	// 
	return usersAPI.checkToken()
		.then(dateStr => new Date(dateStr));


}

