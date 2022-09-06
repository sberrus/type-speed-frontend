import config from "./config";
// data
const baseUrl = `${config.url.prod}/auth`;
//

export const login = async (username: string, password: string) => {
	const route = "/login";
	try {
		const res = await fetch(baseUrl + route, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});

		const data = await res.json();
		if (res.status !== 200) {
			throw data.errors[0].msg;
		}
		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};

export const register = async (
	username: string,
	password: string,
	department: string,
	passwordConfirm: string,
	secretQuestion: string,
	secret: string
) => {
	const route = "/register";
	try {
		const res = await fetch(baseUrl + route, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
				department,
				password_confirm: passwordConfirm,
				secret_question: secretQuestion,
				secret,
			}),
		});

		const data = await res.json();
		if (res.status !== 200) {
			throw data.errors[0].msg;
		}
		return data;
	} catch (error: any) {
		console.log(error);
		throw new Error(error);
	}
};

export const forgotPassword = async (username: string, password: string, passwordConfirm: string, secret: string) => {
	const route = "/forgot-password";
	try {
		const res = await fetch(baseUrl + route, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
				password_confirm: passwordConfirm,
				secret,
			}),
		});

		const data = await res.json();
		if (res.status !== 200) {
			throw data.errors[0].msg;
		}
		return data;
	} catch (error: any) {
		console.log(error);
		throw new Error(error);
	}
};
export const useNewPassword = async (password: string, passwordConfirm: string, secret: string) => {
	const route = "/change-password";
	const { token } = JSON.parse(localStorage.getItem("je-session") as string);

	try {
		const res = await fetch(baseUrl + route, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"x-token": token,
			},
			body: JSON.stringify({
				password,
				password_confirm: passwordConfirm,
				secret,
			}),
		});

		const data = await res.json();
		if (res.status !== 200) {
			throw data.errors[0].msg;
		}
		return data;
	} catch (error: any) {
		console.log(error);
		throw new Error(error);
	}
};
