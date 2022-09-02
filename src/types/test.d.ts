export type TestStateType = "MENU" | "TESTING" | "SHOWSTATS";
export type StatsType = {
	id: string;
	words_per_minute: number;
	valid_words: number;
	wrong_words: number;
};
