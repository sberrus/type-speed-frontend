import { RawScoreType } from "types/ranking";
import { WordsType } from "types/test";

const getStats = (scores: WordsType[], id: string): RawScoreType => {
	let rawScore: RawScoreType = {
		total_words: scores.length,
		total_letters: scores.map((word) => word.word).join("").length,
		id: id,
		valid_words: scores.filter((word) => word.valid).length,
		wrong_words: scores.filter((word) => !word.valid).length,
	};

	return rawScore;
};

export default getStats;
