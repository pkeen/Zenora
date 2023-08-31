import React, { useState } from "react";
import { logIn } from "../../utilities/users-service.js";

const LogInForm = ({ setUser }) => {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState("");

	const handleChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
		setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await logIn(userData);
			setUser(user);
		} catch (error) {
			setError(error.message);
			// console.log(error);
		}
	};

	return (
		<div>
			<div className="form-container">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<label>Email</label>
					<input
						type="email"
						name="email"
						value={userData.email}
						onChange={handleChange}
						required
					/>
					<label>Password</label>
					<input
						type="password"
						name="password"
						value={userData.password}
						onChange={handleChange}
						required
					/>
					<button type="submit">LOG IN</button>
				</form>
			</div>
			<p className="error-message">&nbsp;{error}</p>
		</div>
	);
};

export default LogInForm;
