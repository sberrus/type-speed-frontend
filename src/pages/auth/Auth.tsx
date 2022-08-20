import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
// components
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export type LoginStateTypes = "Login" | "Register" | "Forgot-Password";
export interface StateType {
	to?: string;
	loginState?: LoginStateTypes;
}
const Auth = () => {
	// hooks
	const location = useLocation();
	const state = location.state as StateType;
	// states
	const [loginState, setLoginState] = useState<LoginStateTypes>("Login");

	// methods
	const handleSwitchState = (state: LoginStateTypes) => {
		setLoginState(state);
	};

	useEffect(() => {
		console.log(state);
		if (state?.loginState) {
			return setLoginState(state?.loginState);
		}
		setLoginState("Login");
		return () => {};
	}, []);

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

export default Auth;
