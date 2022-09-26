// imports
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// components
import { Button, Col, Container, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import useAuth from "context/useAuth";
import { TextDecoratorPrimary, TextDecoratorSecondary } from "@components/Decorators/CustomText";
// assets
import Store from "@assets/art/store.svg";
import Stats from "@assets/art/stats.svg";
import Pizza from "@assets/art/pizza.svg";
import User from "@assets/art/user.svg";
import Logout from "@assets/art/logout.svg";
import Jet from "@assets/art/jet.svg";
// styles
import style from "./Navbar.module.scss";

const NavbarMenu = () => {
	const [isCollapse, setIsCollapse] = useState(false);
	const auth = useAuth();

	// methods
	const handleLogout = () => {
		auth?.logout();
	};

	const closeNav = () => {
		if (isCollapse) setIsCollapse(false);
	};

	const openNav = () => {
		if (!isCollapse) setIsCollapse(true);
	};

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<Navbar expand="md" className={style.navbarContainer} sticky="top" expanded={isCollapse}>
				<Container>
					<div className="d-flex justify-content-evenly align-items-center w-100">
						<Navbar.Toggle onClick={isCollapse ? closeNav : openNav} />
						<Container>
							<Row>
								<Col md={6} lg={3} className="d-flex">
									<Navbar.Collapse id="navbarScroll" className="d-none d-md-block">
										<Nav className={`${style.navbar} my-2 my-lg-0`} navbarScroll>
											{auth?.isLogged() ? (
												<>
													<Link to="/" className={style.link} onClick={closeNav}>
														<div className={style.iconContainer}>
															<img src={Store} alt="Inicio logo" />
														</div>
														<TextDecoratorSecondary>Inicio</TextDecoratorSecondary>
													</Link>
													<Link to="/app/ranking" className={style.link} onClick={closeNav}>
														<div className={style.iconContainer}>
															<img src={Stats} alt="Inicio logo" />
														</div>
														<TextDecoratorSecondary>Ranking</TextDecoratorSecondary>
													</Link>
													<Link to="/app" className={style.link} onClick={closeNav}>
														<div className={style.iconContainer}>
															<img src={Pizza} alt="Inicio logo" />
														</div>
														<TextDecoratorSecondary>Participar</TextDecoratorSecondary>
													</Link>
												</>
											) : (
												<>
													<Link
														to="/auth"
														className={style.link}
														state={{ loginState: "Login" }}
														replace
														onClick={closeNav}
													>
														<TextDecoratorSecondary>Login</TextDecoratorSecondary>
													</Link>
													<Link
														to="/auth/register"
														className={style.link}
														state={{ loginState: "Register" }}
														replace
														onClick={closeNav}
													>
														<TextDecoratorSecondary>Register</TextDecoratorSecondary>
													</Link>
												</>
											)}
										</Nav>
									</Navbar.Collapse>
								</Col>
								<Col lg={6} className="d-none d-lg-block">
									<div className="d-none d-xl-flex justify-content-end">
										<div className={`${style.dancingLetters} ps-1`}>
											<div className={style.jetLayer}>
												<img src={Jet} alt="" className={style.jet} />
											</div>

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
									</div>
								</Col>
								<Col md={6} lg={3}>
									<div className={`${style.rightButtons}`}>
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

										<div className={style.logo} onClick={closeNav}>
											<Link to="/" className={style.logoContainerLink}>
												<img src={Jet} alt="Inicio logo" />
											</Link>
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</Container>
			</Navbar>

			{/* offcanvas */}
			<Offcanvas show={isCollapse} onHide={closeNav} className={style.offcanvas}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title></Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className={`${style.offcanvasNavbar}`}>
						{auth?.isLogged() ? (
							<>
								<Link to="/" className={style.offcanvasLink} onClick={closeNav}>
									<div className={style.iconContainer}>
										<img src={Store} alt="Inicio logo" />
									</div>
									<TextDecoratorSecondary>Inicio</TextDecoratorSecondary>
								</Link>
								<Link to="ranking" className={style.offcanvasLink} onClick={closeNav}>
									<div className={style.iconContainer}>
										<img src={Stats} alt="Inicio logo" />
									</div>
									<TextDecoratorSecondary>Ranking</TextDecoratorSecondary>
								</Link>
								<Link to="/app" className={style.offcanvasLink} onClick={closeNav}>
									<div className={style.iconContainer}>
										<img src={Pizza} alt="Inicio logo" />
									</div>
									<TextDecoratorSecondary>Participar</TextDecoratorSecondary>
								</Link>
							</>
						) : (
							<>
								<Link
									to="/auth"
									className={style.offcanvasLink}
									state={{ loginState: "Login" }}
									replace
									onClick={closeNav}
								>
									<TextDecoratorPrimary>Login</TextDecoratorPrimary>
								</Link>
								<Link
									to="/auth"
									className={style.offcanvasLink}
									state={{ loginState: "Register" }}
									replace
									onClick={closeNav}
								>
									<TextDecoratorPrimary>Register</TextDecoratorPrimary>
								</Link>
							</>
						)}
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default NavbarMenu;
