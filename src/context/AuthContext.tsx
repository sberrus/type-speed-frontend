import { forgotPassword, login, register, useNewPassword } from "@api/auth.api";
import { createContext, useEffect, useState } from "react";
import { AppContextInterface, AuthContextProps, GetSessionFunction, LoginErrorType, SessionType } from "types/auth";

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
					location.reload();
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
		localStorage.removeItem("last-try");
		setSession(null);
		location.reload();
	};

	const registerUser = async (
		username: string,
		password: string,
		department: string,
		passwordConfirm: string,
		secretQuestion: string,
		secret: string,
		city: string
	) => {
		// register
		try {
			const session = await register(username, password, passwordConfirm, department, secretQuestion, secret, city);
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

	const changePassword = async (password: string, passwordConfirm: string, secret: string) => {
		// register
		try {
			const session = await useNewPassword(password, passwordConfirm, secret);
			alert("Contraseña cambiada correctamente!");
			if (session.ok) {
				logout();
			}
		} catch (error) {
			console.log(error);
			setLoginError(error + "");
		}
	};
	const changeSecret = async (old_secret: string, new_secret: string, secret_confirm: string) => {
		// register
		try {
			const session = await changeSecret(old_secret, new_secret, secret_confirm);
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
			value={{
				session,
				getSession,
				logout,
				registerUser,
				isLogged,
				loginError,
				setLoginError,
				recoverPassword,
				changePassword,
				changeSecret,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
