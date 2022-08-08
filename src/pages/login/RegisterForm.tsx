import { Button, Form } from "react-bootstrap";

const RegisterForm = () => {
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
			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control type="password" />
			</Form.Group>
			<Button variant="success" size="sm" type="submit" className="float-end d-inline-block">
				Register
			</Button>
		</Form>
	);
};

export default RegisterForm;
