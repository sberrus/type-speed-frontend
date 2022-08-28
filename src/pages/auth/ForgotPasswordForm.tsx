// imports
import { FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
// components
import { TextDecoratorPrimary, TextDecoratorSecondary } from "@components/Decorators/CustomText";
import ErrorToast from "@components/ErrorToast";
// styles
import style from "./Auth.module.scss";
// types
import { LoginFormProps } from "./LoginForm";

const ForgotPasswordForm = ({ handleSwitchState }: LoginFormProps) => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<div className={style.form}>
				<h3>
					<TextDecoratorPrimary>Recuperar Contraseña</TextDecoratorPrimary>
				</h3>
				<ErrorToast />
				<Form.Group className="mb-3" controlId="username">
					<Form.Label className={style.label}>
						<TextDecoratorSecondary>Usuario</TextDecoratorSecondary>
					</Form.Label>
					<Form.Control type="text" placeholder="tortilla_de_patata" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="password">
					<Form.Label className={style.label}>
						<TextDecoratorSecondary>Nueva contraseña</TextDecoratorSecondary>
					</Form.Label>
					<Form.Control type="password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="confirmPassword">
					<Form.Label className={style.label}>
						<TextDecoratorSecondary>Confirmar nueva contraseña</TextDecoratorSecondary>{" "}
					</Form.Label>
					<Form.Control type="password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="secret">
					<Form.Label className={style.label}>
						<TextDecoratorSecondary>[pregunta secreta]</TextDecoratorSecondary>{" "}
					</Form.Label>
					<Form.Control type="text" placeholder="hachiko 🐶" />
				</Form.Group>
			</div>
			<div className={style.buttonContainer}>
				<div className="mb-3">
					<Button variant="outline-dark" type="submit" className={`${style.button} w-100`}>
						<TextDecoratorSecondary>Recover Password</TextDecoratorSecondary>
					</Button>
				</div>
				<div>
					<Button
						variant="outline-dark"
						type="submit"
						onClick={() => {
							handleSwitchState("Login");
						}}
						className={`${style.button} w-100`}
					>
						<TextDecoratorSecondary>Volver a login</TextDecoratorSecondary>
					</Button>
				</div>
			</div>
		</Form>
	);
};

export default ForgotPasswordForm;
