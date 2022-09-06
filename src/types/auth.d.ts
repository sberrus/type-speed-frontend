export interface StateType {
	to?: string;
}
export type SessionType = {
	user: {
		username: string;
		secret_question: string;
	};
	token: string;
};

export type GetSessionFunction = {
	(username: string, password: string): void;
};
export type LoginErrorType = string | null;
export interface AppContextInterface {
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
	changePassword: (password: string, passwordConfirm: string, secret: string) => void;
	changeSecret: (old_secret: string, new_secret: string, secret_confirm: string) => void;
}
export type AuthContextProps = {
	children: React.ReactElement;
};
