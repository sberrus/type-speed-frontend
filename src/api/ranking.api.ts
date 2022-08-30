const baseUrl = "http://localhost:8080/api/ranking";
export type RankingRecords = {
	id: string;
	words_per_minute: number;
	valid_words: number;
	wrong_words: number;
};

const getRanking = async (uid?: string) => {
	let endpoint;
	const token = localStorage.getItem("je_session");
	console.log(token);

	if (uid) {
		endpoint = `${baseUrl}?id=${uid}`;
	} else {
		endpoint = baseUrl;
	}

	try {
		const res = await fetch(endpoint, {
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

export { getRanking };
