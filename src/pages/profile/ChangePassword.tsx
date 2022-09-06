// components
import { TextDecoratorSecondary } from "@components/Decorators/CustomText";
import { ChangeEvent, FormEvent, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
// styles
import style from "./Profile.module.scss";
// context
import useAuth from "context/useAuth";
import ErrorToast from "@components/ErrorToast";
import { Link } from "react-router-dom";
// types

const ChangePassword = () => {
	// states
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [secret, setSecret] = useState("");
	// hooks
	const auth = useAuth();

	// methods
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		auth?.changePassword(password, confirmPassword, secret);
	};

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(() => e.target.value);
	};
	const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(() => e.target.value);
	};
	const handleSecret = (e: ChangeEvent<HTMLInputElement>) => {
		setSecret(() => e.target.value);
	};

	return (
		<div className={style.authWrapper}>
			<Container>
				<Row>
					<Col xs={12} md={8} lg={6} className={style.formWrapper}>
						<Form onSubmit={handleSubmit}>
							<div className={style.form}>
								<h3 className="mb-4">
									<TextDecoratorSecondary>Modificar Contraseña</TextDecoratorSecondary>
								</h3>
								<ErrorToast />
								<hr />
								<Form.Group className="mb-3" controlId="password">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Contraseña</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										autoCapitalize="off"
										type="password"
										value={password}
										onChange={handlePassword}
										className={style.input}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="confirmPassword">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Confirmar contraseña</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										autoCapitalize="off"
										type="password"
										value={confirmPassword}
										onChange={handleConfirmPassword}
										className={style.input}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="secret">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>
											<>
												secreto{" "}
												<i>
													{auth?.session?.user.secret_question
														? auth?.session?.user.secret_question
														: "Error getting secret_question"}
												</i>
											</>
										</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										autoCapitalize="off"
										type="password"
										value={secret}
										onChange={handleSecret}
										className={style.input}
									/>
								</Form.Group>
							</div>
							<div className={style.buttonContainer}>
								<div className="mb-3">
									<button className={style.buttonPrimary}>
										<TextDecoratorSecondary>Cambiar contraseña</TextDecoratorSecondary>
									</button>
								</div>
								<hr className="text-warning" />
								<div>
									<Link to="/profile" className={`${style.buttonPrimary}`}>
										<TextDecoratorSecondary>Volver</TextDecoratorSecondary>
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

export default ChangePassword;
