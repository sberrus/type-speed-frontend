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
// types

const ChangeUsername = () => {
	// states
	const [username, setUsername] = useState("");

	// methods
	const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};
	return (
		<div className={style.profile}>
			<div className={style.wrapper}>
				<h2 className="text-center">
					<TextDecoratorPrimary>Cambiar username</TextDecoratorPrimary>
				</h2>
				<Container fluid className={style.formContainer}>
					<Row>
						<Col md={6} className="m-auto text-center">
							<Form onSubmit={handleSubmit}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<div className={style.inputContainer}>
										<Form.Control
											type="text"
											placeholder="Escribe nuevo username"
											value={username}
											onChange={handleUsernameChange}
										/>
									</div>
								</Form.Group>

								<Button variant="primary" type="submit" className="m-auto">
									Cambiar username
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default ChangeUsername;
