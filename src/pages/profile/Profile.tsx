// imports
// components
import { Col, Container, Row } from "react-bootstrap";
import { TextDecoratorPrimary, TextDecoratorSecondary } from "@components/Decorators/CustomText";
import { Link } from "react-router-dom";
// styles
import style from "./Profile.module.scss";
// types
import useAuth from "context/useAuth";

//
const Profile = () => {
	// hooks
	const auth = useAuth();

	//
	return (
		<Container>
			<div className={style.profile}>
				<div className={style.wrapper}>
					<h2 className="text-center mb-5">
						<TextDecoratorPrimary>
							<>Configuración del Perfil </>
						</TextDecoratorPrimary>
					</h2>
					<Row>
						<Col lg={6} className="m-auto">
							<div className={style.userData}>
								<p className={style.data}>
									<TextDecoratorSecondary>
										<>Usuario: {auth?.session?.user.username}</>
									</TextDecoratorSecondary>
								</p>
								<p className={style.data}>
									<TextDecoratorSecondary>
										<>Ciudad: {auth?.session?.user.city}</>
									</TextDecoratorSecondary>
								</p>
							</div>
							<div className={style.menuContainer}>
								<div className={style.buttonContainer}>
									{/* <Link to="change-username" className={style.button}>
										<TextDecoratorSecondary>Cambiar Username</TextDecoratorSecondary>
									</Link> */}
									<Link to="change-password" className={style.button}>
										<TextDecoratorSecondary>Cambiar Contraseña</TextDecoratorSecondary>
									</Link>
									{/* <Link to="change-secret" className={style.button}>
										<TextDecoratorSecondary>Cambiar PIN/SECRETO</TextDecoratorSecondary>
									</Link> */}
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</Container>
	);
};

export default Profile;
