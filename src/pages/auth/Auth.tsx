import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
// components
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
// styles
import style from "./Auth.module.scss";
// types
export type LoginStateTypes = "Login" | "Register" | "Forgot-Password";
export interface StateType {
	to?: string;
	loginState?: LoginStateTypes;
}

//
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
		if (state?.loginState) {
			return setLoginState(state?.loginState);
		}
		setLoginState("Login");
		return () => {};
	}, []);

	return (
		<>
			<div className={style.authWrapper}>
				<Container>
					<Row>
						<Col xs={12} md={8} className={style.formWrapper}>
							{loginState === "Login" && <LoginForm handleSwitchState={handleSwitchState} />}
							{loginState === "Register" && <RegisterForm handleSwitchState={handleSwitchState} />}
							{loginState === "Forgot-Password" && <ForgotPasswordForm handleSwitchState={handleSwitchState} />}
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Auth;
