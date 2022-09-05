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

const ChangeUsername = () => {
	// states
	const [username, setUsername] = useState("");
	const [confirmUsername, setConfirmUsername] = useState("");
	// hooks
	const auth = useAuth();

	// methods
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		alert("username cambiado!");
	};

	const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(() => e.target.value);
	};
	const handleConfirmUsername = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmUsername(() => e.target.value);
	};

	return (
		<div className={style.authWrapper}>
			<Container>
				<Row>
					<Col xs={12} md={8} lg={6} className={style.formWrapper}>
						<Form onSubmit={handleSubmit}>
							<div className={style.form}>
								<h3 className="mb-4">
									<TextDecoratorSecondary>Modificar nombre de usuario</TextDecoratorSecondary>
								</h3>
								<ErrorToast />
								<hr />
								<Form.Group className="mb-3" controlId="username">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Nuevo nombre de usuario</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										autoCapitalize="off"
										type="text"
										value={username}
										onChange={handleUsername}
										className={style.input}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Confirmar nombre de usuario</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										autoCapitalize="off"
										type="text"
										value={confirmUsername}
										onChange={handleConfirmUsername}
										className={style.input}
									/>
								</Form.Group>
							</div>
							<div className={style.buttonContainer}>
								<div className="mb-3">
									<button className={style.buttonPrimary}>
										<TextDecoratorSecondary>Cambiar username</TextDecoratorSecondary>
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

export default ChangeUsername;
