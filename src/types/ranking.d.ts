export type ScoresType = {
	id: string;
	words_per_minute: number;
	letters_per_second: number;
	accuracy: number;
};

// ranking categories types
export type RankingCategoriesTypes = "words_per_minute" | "letters_per_second" | "accuracy";

// raw score to send to backend
export type RawScoreType = {
	id: string;
	total_words: number;
	total_letters: number;
	valid_words: number;
	wrong_words: number;
};
