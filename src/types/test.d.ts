export type TestStateType = "WARMUP" | "TESTING" | "SHOWSTATS";
export type StatsType = {
	id: string;
	words_per_minute: number;
	valid_words: number;
	wrong_words: number;
};

export type WordsType = {
	valid: boolean;
	word: string;
};
