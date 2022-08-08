import useAuth from "context/useAuth";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { LoginStateTypes } from "./Login";

type LoginFormProps = {
	handleSwitchState: (state: LoginStateTypes) => void;
};
const LoginForm = ({ handleSwitchState }: LoginFormProps) => {
	// states
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// hooks
	const auth = useAuth();

	// login
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		auth?.getUser(username, password);
	};
	// inputs handlers
	const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(() => e.target.value);
	};
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(() => e.target.value);
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
