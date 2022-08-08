import { login } from "@api/auth";
import { createContext, useState } from "react";
// types
type UserType = string | null;
type TokenType = string | null;
type GetUserFunction = {
	(username: string, password: string): void;
};
interface AppContextInterface {
	user: UserType;
	token: TokenType;
	getUser: GetUserFunction;
}
type AuthContextProps = {
	children: React.ReactElement;
};
// context
export const AuthContext = createContext<AppContextInterface | null>(null);

//
const AuthProvider = ({ children }: AuthContextProps) => {
	const [user, setUser] = useState<UserType>(null);
	const [token, setToken] = useState<TokenType>(null);

	const getUser: GetUserFunction = (username, password) => {
		login(username, password);
	};

	return <AuthContext.Provider value={{ user, token, getUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
