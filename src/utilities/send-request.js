import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
	// fetch accepts options arg as second argument
	// used to include payload, set headers, specify method, etc.
	const options = { method };

	if (payload) {
		options.headers = { "Content-Type": "application/json" };
		options.body = JSON.stringify(payload);
	}

	const token = getToken();
	if (token) {
		// need to add authorization header
		// use the logical OR assignment
		options.headers ||= {};

		options.headers.Authorization = `Bearer ${token}`;
	}

	const res = await fetch(url, options);

	// if res.ok is false something went wrong
	if (res.ok) {
		return res.json();
	} else {
		const error = await res.json();
		throw new Error(error.error.message);
	}
}
