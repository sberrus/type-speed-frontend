// const
const baseUrl = "http://localhost:8080/api/ranking";
// types
import { RankingCategoriesTypes } from "types/ranking";

/**
 * get the top ten scores from all players
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
 * get current player top ten scores
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

/**
 * Get ranking top ten scores sorted by category
 * @param category Category to sort by
 */
export const getRankingByCategory = async (category: RankingCategoriesTypes) => {
	const endpoint = `${baseUrl}/category/${category}`;
	const response = await fetch(endpoint);
	const { result } = await response.json();
	return result;
};
