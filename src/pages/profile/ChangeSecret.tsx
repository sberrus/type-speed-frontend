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

const ChangeSecret = () => {
	// states
	const [secret, setSecret] = useState("");
	const [confirmSecret, setConfirmSecret] = useState("");
	// hooks
	const auth = useAuth();

	// methods
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		alert("secreto cambiado!");
	};

	const handleSecret = (e: ChangeEvent<HTMLInputElement>) => {
		setSecret(() => e.target.value);
	};
	const handleConfirmSecret = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmSecret(() => e.target.value);
	};

	return (
		<div className={style.authWrapper}>
			<Container>
				<Row>
					<Col xs={12} md={8} lg={6} className={style.formWrapper}>
						<Form onSubmit={handleSubmit}>
							<div className={style.form}>
								<h3 className="mb-4">
									<TextDecoratorSecondary>Modificar secreto</TextDecoratorSecondary>
								</h3>
								<ErrorToast />
								<hr />
								<Form.Group className="mb-3" controlId="username">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Nuevo secreto</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control type="text" value={secret} onChange={handleSecret} className={style.input} />
								</Form.Group>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label className={style.label}>
										<TextDecoratorSecondary>Confirmar nuevo secreto</TextDecoratorSecondary>
									</Form.Label>
									<Form.Control
										type="text"
										value={confirmSecret}
										onChange={handleConfirmSecret}
										className={style.input}
									/>
								</Form.Group>
							</div>
							<div className={style.buttonContainer}>
								<div className="mb-3">
									<button className={style.buttonPrimary}>
										<TextDecoratorSecondary>Cambiar secreto</TextDecoratorSecondary>
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

export default ChangeSecret;
