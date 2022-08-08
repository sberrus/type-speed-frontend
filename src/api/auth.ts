// data
const baseUrl = "http://localhost:8080/api/auth";
// types
export type UserType = {
	username: string;
	token: string;
};

export const login = async (username: string, password: string) => {
	const route = "/login";
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

	console.log(data);
};
