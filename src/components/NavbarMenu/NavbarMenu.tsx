import useAuth from "context/useAuth";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// assets
import JE_Logo from "@assets/img/JE_Logo_white.svg";
import { useEffect } from "react";

const NavbarMenu = () => {
	const auth = useAuth();
	const { pathname } = useLocation();

	const handleClick = () => {
		auth?.logout();
	};

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="p-3" sticky="top">
			<Container>
				<Link to="/">
					<img alt="Just Eat Logo" src={JE_Logo} className="d-inline-block align-top" />
				</Link>
				{pathname !== "/auth" && (
					<>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav className="ms-auto my-2 my-lg-0" navbarScroll>
								{auth?.isLogged() ? (
									<>
										<Button
											className="btn btn-danger"
											onClick={() => {
												handleClick();
											}}
										>
											Log Out
										</Button>
									</>
								) : (
									<>
										<Link to="/auth" state={{ loginState: "Login" }}>
											<Button variant="outline-light">Login</Button>
										</Link>
										<Link to="/auth" state={{ loginState: "Register" }}>
											<Button variant="outline-light">Register</Button>
										</Link>
									</>
								)}
							</Nav>
						</Navbar.Collapse>
					</>
				)}
			</Container>
		</Navbar>
	);
};

export default NavbarMenu;
