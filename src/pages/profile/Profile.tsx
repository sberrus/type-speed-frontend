// imports
import { useState } from "react";
// components
import { Col, Row } from "react-bootstrap";
import { TextDecoratorPrimary } from "@components/Decorators/CustomText";
import { Link } from "react-router-dom";
// styles
import style from "./Profile.module.scss";
// types
import useAuth from "context/useAuth";

//
const Profile = () => {
	// hooks
	const auth = useAuth();
	// states
	const [username] = useState(() => auth?.session?.user.username);

	//
	return (
		<div className={style.profile}>
			<div className={style.wrapper}>
				<h2 className="text-center mb-5">
					<TextDecoratorPrimary>
						<>Configuración del Perfil [{username}]</>
					</TextDecoratorPrimary>
				</h2>
				<Row>
					<Col lg={6} className="m-auto">
						<div className={style.menuContainer}>
							<div className={style.buttonContainer}>
								<Link to="change-username" className={style.button}>
									Cambiar Username
								</Link>
								<Link to="change-password" className={style.button}>
									Cambiar Contraseña
								</Link>
								<Link to="change-secret" className={style.button}>
									Cambiar PIN/SECRETO
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Profile;
