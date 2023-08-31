import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LoginForm/LogInForm";

const AuthPage = ({ setUser }) => {
	const [login, setLogin] = useState(false);

	return (
		<main>
			<h1>Auth Page</h1>
			{login ? (
				<LogInForm setUser={setUser} />
			) : (
				<SignUpForm setUser={setUser} />
			)}
			<button onClick={() => setLogin(!login)}>
				Switch Login/Signup
			</button>
		</main>
	);
};

export default AuthPage;
