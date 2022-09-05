// imports
import { ChangeEvent, FormEvent, useState } from "react";
// components
import { Col, Container, Form, Row } from "react-bootstrap";
import { TextDecoratorSecondary } from "@components/Decorators/CustomText";
import ErrorToast from "@components/ErrorToast";
// context
import useAuth from "context/useAuth";
// styles
import style from "./Auth.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
	// states
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	// hooks
	const auth = useAuth();

	// methods
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		auth?.getSession(username, password);
		setIsLoading(false);
	};

	const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(() => e.target.value);
	};
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(() => e.target.value);
	};

	return (
		<div className={style.authWrapper}>
			<Container>
				<Row>
					<Col xs={12} md={8} lg={6} className={style.formWrapper}>
						<Form onSubmit={handleSubmit}>
							<div className={style.form}>
								<h3 className="mb-4">
									<TextDecoratorSecondary>Login</TextDecoratorSecondary>
								</h3>
								<ErrorToast />
								<hr />
								<Form.Group className="mb-3" controlId="username">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Usuario</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										type="text"
										value={username}
										onChange={handleUsername}
										className={style.input}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Contraseña</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										type="password"
										value={password}
										onChange={handlePassword}
										className={style.input}
									/>
								</Form.Group>
							</div>
							<div className={style.buttonContainer}>
								<div className="mb-3">
									<button className={style.buttonPrimary} disabled={isLoading}>
										<TextDecoratorSecondary>Iniciar Sesión</TextDecoratorSecondary>
									</button>
								</div>
								<hr className="text-warning" />
								<div>
									<Link to="register" className={`${style.buttonPrimary} mb-2`}>
										<TextDecoratorSecondary>Registrarse</TextDecoratorSecondary>
									</Link>
									<Link to="forgot-password" className={`${style.buttonPrimary}`}>
										<TextDecoratorSecondary>Recuperar contraseña</TextDecoratorSecondary>
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

export default Login;

// TODO: IMPLEMENT REACT-HOOK-FORM FOR FORM VALIDATIONS
