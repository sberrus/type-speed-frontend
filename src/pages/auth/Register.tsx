// imports
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { TextDecoratorPrimary, TextDecoratorSecondary } from "@components/Decorators/CustomText";
// context
import useAuth from "context/useAuth";
// styles
import style from "./Auth.module.scss";
import ErrorToast from "@components/ErrorToast";
import { Link } from "react-router-dom";

const Register = () => {
	// logic states
	const [isLoading, setIsLoading] = useState(false);
	// form states
	const [username, setUsername] = useState("samuel.berrus9");
	const [password, setPassword] = useState("contraseña");
	const [passwordConfirm, setPasswordConfirm] = useState("contraseña");
	const [department, setDepartment] = useState("support");
	const [secretQuestion, setSecretQuestion] = useState("contraseña");
	const [secret, setSecret] = useState("contraseña");
	const [city, setCity] = useState("madrid");

	const auth = useAuth();

	// input handlers
	const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const handlePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
		setPasswordConfirm(e.target.value);
	};
	const handleCity = (e: ChangeEvent<HTMLSelectElement>) => {
		setCity(e.target.value);
	};
	const handleSecretQuestion = (e: ChangeEvent<HTMLInputElement>) => {
		setSecretQuestion(e.target.value);
	};
	const handleSecret = (e: ChangeEvent<HTMLInputElement>) => {
		setSecret(e.target.value);
	};

	// submit handler
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// confirm passwords
		if (password !== passwordConfirm) {
			console.log("Password and Password Confirmation are not equal");
			setIsLoading(false);
			return;
		}

		// try to register
		auth?.registerUser(username, password, passwordConfirm, department, secretQuestion, secret, city);
		setIsLoading(false);
	};

	// tooltip
	const renderTooltip = (props: any) => (
		<Tooltip id="button-tooltip" {...props}>
			Este secreto es necesario para poder recuperar la contraseña. Guardalo en un lugar seguro
		</Tooltip>
	);
	return (
		<div className={style.authWrapper}>
			<Container>
				<Row>
					<Col xs={12} md={8} lg={6} className={style.formWrapper}>
						<Form onSubmit={handleSubmit} id="registerForm">
							{/* inputs */}
							<div className={style.form}>
								<h3 className="mb-4">
									<TextDecoratorPrimary>Registrar Usuario</TextDecoratorPrimary>
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
										value={username}
										onChange={handleUsername}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Contraseña</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										className={style.input}
										autoCapitalize="off"
										type="password"
										value={password}
										onChange={handlePassword}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="confirmPassword">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Confirmar contraseña</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										className={style.input}
										autoCapitalize="off"
										type="password"
										value={passwordConfirm}
										onChange={handlePasswordConfirm}
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Departamento</TextDecoratorSecondary>
									</Form.Label>
									<Form.Select onChange={handleCity}>
										<option>madrid</option>
										<option>cali</option>
									</Form.Select>
								</Form.Group>
								<Form.Group className="mb-3" controlId="secretQuestion">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Pregunta secreta</TextDecoratorSecondary>{" "}
										<OverlayTrigger
											placement="right"
											delay={{ show: 250, hide: 400 }}
											overlay={renderTooltip}
										>
											<button className={style.tooltipTrigger} onClick={(e) => e.preventDefault()}>
												?
											</button>
										</OverlayTrigger>
									</Form.Label>
									<Form.Control
										className={style.input}
										autoCapitalize="off"
										type="text"
										value={secretQuestion}
										onChange={handleSecretQuestion}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="secret">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Secreto</TextDecoratorSecondary>
										<OverlayTrigger
											placement="right"
											delay={{ show: 250, hide: 400 }}
											overlay={renderTooltip}
										>
											<button className={style.tooltipTrigger} onClick={(e) => e.preventDefault()}>
												?
											</button>
										</OverlayTrigger>
									</Form.Label>
									<Form.Control
										className={style.input}
										autoCapitalize="off"
										type="password"
										value={secret}
										onChange={handleSecret}
									/>
								</Form.Group>
							</div>

							{/* buttons */}
							<div className={style.buttonContainer}>
								<div className="mb-3">
									<button
										type="submit"
										form="registerForm"
										className={`${style.buttonPrimary}`}
										disabled={isLoading}
									>
										<TextDecoratorSecondary>Register</TextDecoratorSecondary>
									</button>
								</div>
								<hr className="text-danger" />
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

export default Register;
