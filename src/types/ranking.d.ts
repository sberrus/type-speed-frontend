export type ScoresType = {
	id: string;
	words_per_minute: number;
	letters_per_second: number;
	accuracy: number;
};

// ranking categories types
export type RankingCategoriesTypes = "words_per_minute" | "letters_per_second" | "accuracy";
