import useAuth from "context/useAuth";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// assets
import JE_Logo from "@assets/img/JE_Logo_white.svg";
import { useEffect } from "react";
// styles
import style from "./NavbarMenu.module.scss";

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
		<Navbar expand="lg" className={style.navbar} sticky="top">
			<Container>
				{pathname !== "/auth" && (
					<>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav className={`${style.authButtons} ms-auto my-2 my-lg-0`} navbarScroll>
								{auth?.isLogged() ? (
									<>
										<Button
											className={`${style.button}`}
											variant="outline-dark"
											data-text="Log Out"
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
											<Button className={`${style.button} me-1`} variant="outline-dark" data-text="Login">
												Login
											</Button>
										</Link>
										<Link to="/auth" state={{ loginState: "Register" }}>
											<Button className={`${style.button}`} variant="outline-dark" data-text="Register">
												Register
											</Button>
										</Link>
									</>
								)}
							</Nav>
						</Navbar.Collapse>
					</>
				)}
				<Link to="/" className={style.logoContainerLink}>
					<img alt="Just Eat Logo" src={JE_Logo} />
				</Link>
			</Container>
		</Navbar>
	);
};

export default NavbarMenu;
