import useAuth from "context/useAuth";
import { Container, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
	const auth = useAuth();

	const handleClick = () => {
		auth?.logout();
	};
	return (
		<>
			<Navbar bg="dark" sticky="top">
				<Container>
					<Navbar.Brand
						as="button"
						className="btn btn-danger"
						onClick={() => {
							handleClick();
						}}
					>
						Log Out
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarMenu;
