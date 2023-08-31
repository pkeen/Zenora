import React from "react";
import * as userService from "../../utilities/users-service";

const OrderHistoryPage = () => {
	const handleCheckToken = async () => {
		const expDate = await userService.checkToken();
        console.log(expDate);
	};

	return (
		<div>
			<h1>Order History Page</h1>
			<button onClick={handleCheckToken}>
				Check when my login expires
			</button>
		</div>
	);
};

export default OrderHistoryPage;
