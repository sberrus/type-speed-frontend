// imports
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// components
import { TextDecoratorPrimary, TextDecoratorSecondary } from "@components/Decorators/CustomText";
import ErrorToast from "@components/ErrorToast";
// styles
import style from "./Auth.module.scss";
import { Link } from "react-router-dom";
import useAuth from "context/useAuth";

//
const ForgotPassword = () => {
	// states
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [secret, setSecret] = useState("");
	// context
	const auth = useAuth();

	// methods
	const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const handlePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
		setPasswordConfirm(e.target.value);
	};
	const handleSecret = (e: ChangeEvent<HTMLInputElement>) => {
		setSecret(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		auth?.recoverPassword(username, password, passwordConfirm, secret);
	};

	//
	return (
		<div className={style.authWrapper}>
			<Container>
				<Row>
					<Col xs={12} md={8} lg={6} className={style.formWrapper}>
						<Form onSubmit={handleSubmit}>
							<div className={style.form}>
								<h3>
									<TextDecoratorPrimary>Recuperar Contraseña</TextDecoratorPrimary>
								</h3>
								<ErrorToast />
								<hr />
								<Form.Group className="mb-3" controlId="username">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Usuario</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										className={style.input}
										autoCapitalize="off"
										type="text"
										onChange={handleUsername}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Nueva contraseña</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										className={style.input}
										autoCapitalize="off"
										type="password"
										onChange={handlePassword}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="confirmPassword">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Confirmar contraseña</TextDecoratorSecondary>{" "}
									</Form.Label>
									<Form.Control
										className={style.input}
										autoCapitalize="off"
										type="password"
										onChange={handlePasswordConfirm}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="secret">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>[pregunta secreta]</TextDecoratorSecondary>{" "}
									</Form.Label>
									<Form.Control
										className={style.input}
										autoCapitalize="off"
										type="text"
										onChange={handleSecret}
									/>
								</Form.Group>
							</div>
							<div className={style.buttonContainer}>
								<div className="mb-3">
									<button type="submit" className={`${style.buttonPrimary}`}>
										<TextDecoratorSecondary>Recuperar contraseña</TextDecoratorSecondary>
									</button>
								</div>
								<hr />
								<div>
									<Link to="/auth" className={`${style.buttonPrimary}`}>
										<TextDecoratorSecondary>Volver a Login</TextDecoratorSecondary>
									</Link>
								</div>
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ForgotPassword;
