const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const bcrypt = require("bcrypt");

/*-------- Helper Function --------*/
const createJWT = (user) => {
	return jwt.sign(
		// data payload
		{ user },
		process.env.SECRET,
		{ expiresIn: "24h" }
	);
};

const create = async (req, res) => {
	try {
		const user = await User.create(req.body);
		// token will be string
		const token = createJWT(user);
		res.json(token);
	} catch (err) {
		// unknown error
		let errorCode = "unkown_error";
		let errorMsg = "An unknown error occured.";
		let httpStatus = 500;

		console.log(err);

		if (err.code == 11000) {
			// this means duplicate key error
			httpStatus = 400;
			if ("email" in err.keyPattern) {
				errorCode = "duplicate_email";
				errorMsg = "Signup failed: Email already exists.";
			}
		}
		res.status(httpStatus).json({
			error: {
				code: errorCode,
				message: errorMsg,
			},
		});
	}
};

const login = async (req, res) => {
	try {
		// find user by email
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(401).json({
				error: {
					code: "email_not_found",
					message: "Email address not found.",
				},
			});
		}

		const match = await bcrypt.compare(req.body.password, user.password);
		// if (!match)
		// 	throw new Error(
		// 		"The password you entered does not match our records"
		// 	);
		if (!match) {
			return res.status(401).json({
				error: {
					code: "invalid_password",
					message:
						"The password you entered does not match our records.",
				},
			});
		}

		const token = createJWT(user);
		res.json(token);
	} catch (err) {
		// unknown error
		let errorCode = "unknown_error";
		let errorMsg = "An unknown error occurred.";
		let httpStatus = 500;
		// err.message = "No user email found";
		// console.log(res.status(400).json(err.message))
		res.status(httpStatus).json({
			error: {
				code: errorCode,
				message: errorMsg,
			},
		});
	}
};

const checkToken = (req, res) => {
	// check middleware is doing its job
	console.log("req.user: ", req.user); // This should print the object properties
	res.json(req.exp);
}

module.exports = {
	create,
	login,
	checkToken
};
