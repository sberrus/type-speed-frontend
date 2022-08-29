// imports
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// components
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "context/useAuth";
import { TextDecoratorPrimary, TextDecoratorSecondary } from "@components/Decorators/CustomText";
// assets
import JE_Logo from "@assets/img/JE_Logo_white.svg";
import Store from "@assets/icons/store.svg";
import Stats from "@assets/icons/stats.svg";
import Pizza from "@assets/icons/pizza.svg";
import User from "@assets/icons/user.svg";
import Logout from "@assets/icons/logout.svg";
// styles
import style from "./NavbarMenu.module.scss";

const NavbarMenu = () => {
	const auth = useAuth();
	const { pathname } = useLocation();

	const handleLogout = () => {
		auth?.logout();
	};

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<Navbar expand="md" className={style.navbarContainer} sticky="top" collapseOnSelect>
			<Container>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className={`${style.navbar} my-2 my-lg-0`} navbarScroll>
						{auth?.isLogged() ? (
							<>
								<Link to="/app" className={style.link}>
									<div className={style.iconContainer}>
										<img src={Store} alt="Inicio logo" />
									</div>
									<TextDecoratorSecondary>Inicio</TextDecoratorSecondary>
								</Link>
								<Link to="ranking" className={style.link}>
									<div className={style.iconContainer}>
										<img src={Stats} alt="Inicio logo" />
									</div>
									<TextDecoratorSecondary>Ranking</TextDecoratorSecondary>
								</Link>
								<Link to="/app" className={style.link}>
									<div className={style.iconContainer}>
										<img src={Pizza} alt="Inicio logo" />
									</div>
									<TextDecoratorSecondary>Participar</TextDecoratorSecondary>
								</Link>
							</>
						) : (
							<>
								<Link to="/auth" className={style.link} state={{ loginState: "Login" }} replace>
									<TextDecoratorPrimary>Login</TextDecoratorPrimary>
								</Link>
								<Link to="/auth" className={style.link} state={{ loginState: "Register" }} replace>
									<TextDecoratorPrimary>Register</TextDecoratorPrimary>
								</Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
				<div className={style.rightButtons}>
					{auth?.isLogged() && (
						<div className={style.auth}>
							<Link to="/profile" className={style.logoContainerLink}>
								<img src={User} alt="Inicio logo" />
							</Link>
							<Button className={style.logoContainerButton} onClick={handleLogout}>
								<img src={Logout} alt="Inicio logo" />
							</Button>
						</div>
					)}
					<div className={style.logo}>
						<Link to="/" className={style.logoContainerLink}>
							<img src={JE_Logo} alt="Inicio logo" />
						</Link>
					</div>
				</div>
			</Container>
		</Navbar>
	);
};

export default NavbarMenu;
