import { forgotPassword, login, register, SessionType } from "@api/auth.api";
import { createContext, useEffect, useState } from "react";
// types
type GetSessionFunction = {
	(username: string, password: string): void;
};
type LoginErrorType = string | null;
interface AppContextInterface {
	session: SessionType | null;
	getSession: GetSessionFunction;
	loginError: LoginErrorType;
	setLoginError: (_error: LoginErrorType) => void;
	logout: () => void;
	isLogged: () => boolean;
	registerUser: (
		username: string,
		password: string,
		department: string,
		passwordConfirm: string,
		secretQuestion: string,
		secret: string
	) => void;
	recoverPassword: (username: string, password: string, passwordConfirm: string, secret: string) => void;
}
type AuthContextProps = {
	children: React.ReactElement;
};
// context
export const AuthContext = createContext<AppContextInterface | null>(null);

//
const AuthProvider = ({ children }: AuthContextProps) => {
	const [loginError, setLoginError] = useState<LoginErrorType>(null);
	const [session, setSession] = useState<SessionType | null>(null);
	useEffect(() => {
		const jeSession = JSON.parse(localStorage.getItem("je-session") as string);
		if (jeSession) {
			setSession(jeSession);
		}
		return () => {};
	}, []);

	// methods
	const isLogged = () => !!session;
	const getSession: GetSessionFunction = async (username, password) => {
		try {
			try {
				const session = await login(username, password);
				if (session) {
					localStorage.setItem("je-session", JSON.stringify(session));
					setSession(session);
				}
			} catch (error) {
				console.log(error);
				setLoginError(error + "");
				return;
			}
		} catch (error) {
			console.log(error);
			return;
		}
	};

	const logout = () => {
		localStorage.removeItem("je-session");
		setSession(null);
	};

	const registerUser = async (
		username: string,
		password: string,
		department: string,
		passwordConfirm: string,
		secretQuestion: string,
		secret: string
	) => {
		// register
		try {
			const session = await register(username, password, passwordConfirm, department, secretQuestion, secret);
			if (session) {
				localStorage.setItem("je-session", JSON.stringify(session));
				setSession(session);
			}
		} catch (error) {
			console.log(error);
			setLoginError(error + "");
		}
	};

	const recoverPassword = async (username: string, password: string, passwordConfirm: string, secret: string) => {
		// register
		try {
			const session = await forgotPassword(username, password, passwordConfirm, secret);
			alert("Contraseña recuperada correctamente!");
			// if (session) {
			// 	localStorage.setItem("je-session", JSON.stringify(session));
			// 	setSession(session);
			// }
		} catch (error) {
			console.log(error);
			setLoginError(error + "");
		}
	};

	return (
		<AuthContext.Provider
			value={{ session, getSession, logout, registerUser, isLogged, loginError, setLoginError, recoverPassword }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
