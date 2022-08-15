import useAuth from "context/useAuth";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

const RegisterForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [secretQuestion, setSecretQuestion] = useState("");
	const [secret, setSecret] = useState("");

	const auth = useAuth();

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

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// confirm passwords
		if (password !== passwordConfirm) {
			console.log("Password and Password Confirmation are not equal");
			return;
		}

		// try to register
		auth?.registerUser(username, password, passwordConfirm, secretQuestion, secret);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="username">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" placeholder="tortilla_de_patata" value={username} onChange={handleUsername} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" value={password} onChange={handlePassword} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control type="password" value={passwordConfirm} onChange={handlePasswordConfirm} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Secret Question</Form.Label>
				<Form.Control type="text" placeholder="¿Cat name?" value={secretQuestion} onChange={handleSecretQuestion} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Secret</Form.Label>
				<Form.Control
					type="password"
					placeholder="save this info in a safe place 🔒"
					value={secret}
					onChange={handleSecret}
				/>
			</Form.Group>
			<Button variant="success" size="sm" type="submit" className="float-end d-inline-block">
				Register
			</Button>
		</Form>
	);
};

export default RegisterForm;
