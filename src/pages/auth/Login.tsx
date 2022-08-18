import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ForgotPasswordForm from "./ForgotPasswordForm";
// components
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export type LoginStateTypes = "Login" | "Register" | "Forgot-Password";
const Login = () => {
	const [loginState, setLoginState] = useState<LoginStateTypes>("Login");

	const handleSwitchState = (state: LoginStateTypes) => {
		setLoginState(state);
	};

	return (
		<div>
			<div>decorator</div>
			<div>
				<Container>
					<Row>
						<Col xs={8} className="m-auto">
							{loginState === "Login" ? (
								<Button
									size="sm"
									className="ms-auto d-block"
									onClick={() => {
										handleSwitchState("Register");
									}}
								>
									Register
								</Button>
							) : (
								<Button
									size="sm"
									className="ms-auto d-block"
									onClick={() => {
										handleSwitchState("Login");
									}}
								>
									Login
								</Button>
							)}
							<h3>{loginState}</h3>
							<hr />
							{loginState === "Login" && <LoginForm handleSwitchState={handleSwitchState} />}
							{loginState === "Register" && <RegisterForm />}
							{loginState === "Forgot-Password" && <ForgotPasswordForm />}
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Login;
