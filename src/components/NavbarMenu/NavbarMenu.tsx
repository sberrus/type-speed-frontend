// imports
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
				<div className="d-flex justify-content-evenly align-items-center w-100">
					<div>
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
					</div>
					<div className={style.dancingLetters}>
						<span className={style.letter}>
							J <span className={style.layer}>J</span>
						</span>
						<span className={style.letter}>
							E <span className={style.layer}>E</span>
						</span>
						<span className={style.letter}>
							T <span className={style.layer}>T</span>
						</span>
						<span className={style.letter}>
							{" "}
							<span className={style.layer}> </span>
						</span>
						<span className={style.letter}>
							S <span className={style.layer}>S</span>
						</span>
						<span className={style.letter}>
							P <span className={style.layer}>P</span>
						</span>
						<span className={style.letter}>
							E <span className={style.layer}>E</span>
						</span>
						<span className={style.letter}>
							E <span className={style.layer}>E</span>
						</span>
						<span className={style.letter}>
							D <span className={style.layer}>D</span>
						</span>
						<span className={style.letter}>
							{" "}
							<span className={style.layer}> </span>
						</span>
						<span className={style.letter}>
							T <span className={style.layer}>T</span>
						</span>
						<span className={style.letter}>
							O <span className={style.layer}>O</span>
						</span>
						<span className={style.letter}>
							U <span className={style.layer}>U</span>
						</span>
						<span className={style.letter}>
							R <span className={style.layer}>R</span>
						</span>
						<span className={style.letter}>
							N <span className={style.layer}>N</span>
						</span>
						<span className={style.letter}>
							A <span className={style.layer}>A</span>
						</span>
						<span className={style.letter}>
							M <span className={style.layer}>M</span>
						</span>
						<span className={style.letter}>
							E <span className={style.layer}>E</span>
						</span>
						<span className={style.letter}>
							N <span className={style.layer}>N</span>
						</span>
						<span className={style.letter}>
							T <span className={style.layer}>T</span>
						</span>
						<span className={style.letter}>
							! <span className={style.layer}>!</span>
						</span>
					</div>
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
				</div>
			</Container>
		</Navbar>
	);
};

export default NavbarMenu;
