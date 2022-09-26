import config from "./config";
// const
const baseUrl = `${config.url.dev}/ranking`;
let cityQuery = ``;
if (localStorage.getItem("je-session")) {
	const _session = JSON.parse(localStorage.getItem("je-session")!);
	cityQuery = `?city=${_session.user.city}`;
}

import getStats from "helpers/getStats";
// types
import { RankingCategoriesTypes } from "types/ranking";
import { WordsType } from "types/test";

/**
 * get the top ten scores from all players
 * @returns array with the current top ten
 */
export const getTopTen = async () => {
	try {
		const res = await fetch(`${baseUrl}${cityQuery}`, {
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
	const endpoint = `${baseUrl}/category/${category}${cityQuery}`;
	const response = await fetch(endpoint);
	const { result } = await response.json();
	return result;
};

export const saveNewScore = async (score: WordsType[], id: string, token: string) => {
	const rawData = getStats(score, id);
	try {
		const response = await fetch(baseUrl, {
			method: "POST",
			headers: { "content-type": "application/json", "x-token": token },
			body: JSON.stringify(rawData),
		});
		const res = await response.json();
		if (response.status !== 200) {
			console.log(res.errors);
		}
		return { res, data: rawData };
	} catch (error: any) {
		throw new Error(error);
	}
};
