import useAuth from "context/useAuth";

const baseUrl = "http://localhost:8080/api/ranking";

/**
 * retrieves the top ten scores from all players
 * @returns array with the current top ten
 */
export const getTopTen = async () => {
	try {
		const res = await fetch(baseUrl, {
			method: "GET",
		});

		const data = await res.json();
		if (res.status !== 200) {
			throw data.errors[0].msg;
		}
		return data.result;
	} catch (error: any) {
		throw new Error(error);
	}
};

/**
 * retrieves current player top ten scores
 * @param uid username
 * @returns
 */
export const getUserScores = async (uid: string) => {
	if (!uid) {
		throw new Error("uid param must be provided!");
	}

	const endpoint = `${baseUrl}/${uid}`;

	const { token } = JSON.parse(localStorage.getItem("je-session") as string);

	try {
		const res = await fetch(endpoint, {
			method: "GET",
			headers: { "x-token": token },
		});

		const data = await res.json();
		if (res.status !== 200) {
			throw data.errors[0].msg;
		}
		return data.result;
	} catch (error: any) {
		throw new Error(error);
	}
};
