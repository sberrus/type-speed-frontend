// components
import { TextDecoratorPrimary } from "@components/Decorators/CustomText";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// assets
import EditButton from "@assets/art/edit_button.svg";
import CloseButton from "@assets/art/close_button.svg";
// styles
import style from "./Profile.module.scss";
// context
import useAuth from "context/useAuth";
import { ConfigStateProps } from "types/profile";
// types

const ChangePassword = () => {
	// states
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [secret, setSecret] = useState("");

	// methods
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value);
	};
	const handleSecretChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSecret(e.target.value);
	};

	//
	return (
		<div className={style.profile}>
			<div className={style.wrapper}>
				<h2 className="text-center">
					<TextDecoratorPrimary>Cambiar contraseña</TextDecoratorPrimary>
				</h2>
				<Container fluid className={style.formContainer}>
					<Row>
						<Col md={6} className="m-auto">
							<Form onSubmit={handleSubmit}>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label>Nueva contraseña</Form.Label>
									<Form.Control
										type="text"
										placeholder="Nueva contraseña"
										value={password}
										onChange={handlePasswordChange}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="confirmPassword">
									<Form.Label>Confirmar contraseña</Form.Label>
									<Form.Control
										type="text"
										placeholder="Confirmar contraseña"
										value={confirmPassword}
										onChange={handleConfirmPasswordChange}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="secret">
									<Form.Label>SECRET</Form.Label>
									<Form.Control
										type="text"
										placeholder="Secret"
										value={secret}
										onChange={handleSecretChange}
									/>
								</Form.Group>

								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default ChangePassword;
