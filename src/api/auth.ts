// data
const baseUrl = "https://typespeed.samdev.es/api/auth";
// types
export type SessionType = {
	user: {
		username: string;
	};
	token: string;
};

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
			throw new Error(data.errors[0].msg);
		}
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const register = async (
	username: string,
	password: string,
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
				password_confirm: passwordConfirm,
				secret_question: secretQuestion,
				secret,
			}),
		});

		const data = await res.json();
		if (res.status !== 200) {
			throw new Error(data.errors[0].msg);
		}
		return data;
	} catch (error) {
		console.log(error);
	}
};
