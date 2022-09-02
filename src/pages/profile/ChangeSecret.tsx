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

const ChangeSecret = () => {
	// states
	const [secret, setSecret] = useState("");
	const [confirmSecret, setConfirmSecret] = useState("");

	// methods
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};
	const handleSecretChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSecret(e.target.value);
	};
	const handleConfirmSecretChange = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmSecret(e.target.value);
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
								<Form.Group className="mb-3" controlId="secret">
									<Form.Label>Nueva Secret</Form.Label>
									<Form.Control
										type="text"
										placeholder="Nuevo Secret"
										value={secret}
										onChange={handleSecretChange}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="confirmSecret">
									<Form.Label>Confirmar Secret</Form.Label>
									<Form.Control
										type="text"
										placeholder="Confirmar Secret"
										value={confirmSecret}
										onChange={handleConfirmSecretChange}
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

export default ChangeSecret;
