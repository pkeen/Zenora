import sendRequest from "./send-request";
const BASE_URL = "/api/users";

export const signUp = async (userData) => {
	// // Fetch uses an options object
	// // to make requests other than GET including data such as headers
	// const res = await fetch(BASE_URL, {
	// 	method: "POST",
	// 	headers: { "Content-Type": "application/json" },
	// 	body: JSON.stringify(userData),
	// });
	// // check if request was succesful
	// if (res.ok) {
	// 	// res.json() will resolve to JWT
	// 	return res.json();
	// } else {
	// 	throw Error("Invalid Sign Up");
	// }
	return sendRequest(BASE_URL, "POST", userData);
};

export const logIn = async (userData) => {
	// const endpoint = BASE_URL + "/login";
	// // make the request
	// const res = await fetch(endpoint, {
	// 	method: "POST",
	// 	headers: { "Content-Type": "application/json" },
	// 	body: JSON.stringify(userData),
	// });
	// // check is request ok
	// if (res.ok) {
	// 	return res.json();
	// } else {
	// 	throw Error(await res.json()) // pass through the error message from server
	// 	// return res.json();
	// }

	return sendRequest(`${BASE_URL}/login`, "POST", userData);
};

export const checkToken = async () => {
	return sendRequest(`${BASE_URL}/check-token`);
};
