import { RawScoreType } from "./ranking";

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

// types
interface TestContextInterface {
	testState: TestStateType;
	stats: RawScoreType | null;
	saveTest: (score: WordsType[]) => any;
	isSending: boolean;
}
type TestContextProps = {
	children: React.ReactElement;
};
