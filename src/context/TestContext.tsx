// imports
import { saveNewScore } from "@api/ranking.api";
import getStats from "helpers/getStats";
import { createContext, useEffect, useState } from "react";
import { StatsType, TestStateType, WordsType } from "types/test";
import useAuth from "./useAuth";
// types
interface TestContextInterface {
	testState: TestStateType;
	stats: StatsType;
	saveTest: (score: WordsType[]) => any;
}
type TestContextProps = {
	children: React.ReactElement;
};
// context
export const TestContext = createContext<TestContextInterface | null>(null);

//
const TestProvider = ({ children }: TestContextProps) => {
	// hooks
	const auth = useAuth();
	// Testing type
	const [testState, setTestState] = useState<TestStateType>("TESTING");
	// Show Stats
	const [stats, setStats] = useState<StatsType>({
		id: "",
		words_per_minute: 0,
		valid_words: 0,
		wrong_words: 0,
	});

	// methods
	const saveTest = async (score: WordsType[]) => {
		const id = auth?.session?.user.username;
		const token = auth?.session?.token;
		saveNewScore(score, id as string, token as string);
	};

	useEffect(() => {
		console.log(testState);
		return () => {};
	}, []);

	// methods

	return <TestContext.Provider value={{ testState, stats, saveTest }}>{children}</TestContext.Provider>;
};

export default TestProvider;
