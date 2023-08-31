import { Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";

const NavBar = ({ user, setUser }) => {
	const handleLogOut = (e) => {
		logOut();
		setUser(null);
	};

	return (
		<nav>
			<Link to="/orders">Orders</Link>
			&nbsp; | &nbsp;
			<Link to="/orders/new">New Order</Link>
			&nbsp; | &nbsp;
			<p>Welcome, {user.name}</p>
			&nbsp; | &nbsp;
			<button onClick={handleLogOut}>Log out</button>
		</nav>
	);
};

export default NavBar;
