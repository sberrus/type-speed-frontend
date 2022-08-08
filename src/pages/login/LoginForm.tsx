import { Button, Form } from "react-bootstrap";
import { LoginStateTypes } from "./Login";

type LoginFormProps = {
	handleSwitchState: (state: LoginStateTypes) => void;
};
const LoginForm = ({ handleSwitchState }: LoginFormProps) => {
	return (
		<Form>
			<Form.Group className="mb-3" controlId="username">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" placeholder="tortilla_de_patata" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" />
			</Form.Group>
			<Button
				variant="warning"
				size="sm"
				className="me-auto d-inline-block"
				onClick={() => {
					handleSwitchState("Forgot-Password");
				}}
			>
				forgot-password
			</Button>
			<Button variant="success" size="sm" type="submit" className="float-end d-inline-block">
				Login
			</Button>
		</Form>
	);
};

export default LoginForm;
