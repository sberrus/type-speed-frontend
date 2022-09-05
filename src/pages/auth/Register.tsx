// imports
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
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
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [department, setDepartment] = useState("support");
	const [secretQuestion, setSecretQuestion] = useState("");
	const [secret, setSecret] = useState("");

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
		auth?.registerUser(username, password, passwordConfirm, department, secretQuestion, secret);
		setIsLoading(false);
	};

	return (
		<div className={style.authWrapper}>
			<Container>
				<Row>
					<Col xs={12} md={8} lg={6} className={style.formWrapper}>
						<Form onSubmit={handleSubmit}>
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
										type="text"
										placeholder="tortilla_de_patata"
										value={username}
										onChange={handleUsername}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Contraseña</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control type="password" value={password} onChange={handlePassword} />
								</Form.Group>
								<Form.Group className="mb-3" controlId="confirmPassword">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Confirmar contraseña</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control type="password" value={passwordConfirm} onChange={handlePasswordConfirm} />
								</Form.Group>
								{/* <Form.Group className="mb-3">
						<Form.Label className={style.label}>
							<TextDecoratorSecondary>Departamento</TextDecoratorSecondary>
						</Form.Label>
						<Form.Select>
							<option>support</option>
						</Form.Select>
					</Form.Group> */}
								<Form.Group className="mb-3" controlId="secretQuestion">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Pregunta secreta</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="¿nombre mascota?"
										value={secretQuestion}
										onChange={handleSecretQuestion}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="secret">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Secreto</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										type="password"
										placeholder="hachiko 🐶"
										value={secret}
										onChange={handleSecret}
									/>
								</Form.Group>
							</div>

							{/* buttons */}
							<div className={style.buttonContainer}>
								<div className="mb-3">
									<button type="submit" className={`${style.buttonPrimary}`} disabled={isLoading}>
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
