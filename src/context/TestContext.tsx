// imports
import { createContext, useEffect, useState } from "react";
import { StatsType, TestStateType } from "types/test";
// types
interface TestContextInterface {
	testState: TestStateType;
	stats: StatsType;
	finishTest: (stats: StatsType) => void;
}
type TestContextProps = {
	children: React.ReactElement;
};
// context
export const TestContext = createContext<TestContextInterface | null>(null);

//
const TestProvider = ({ children }: TestContextProps) => {
	// Testing type
	const [testState, setTestState] = useState<TestStateType>("WARMUP");
	// Show Stats
	const [stats, setStats] = useState<StatsType>({
		id: "",
		words_per_minute: 0,
		valid_words: 0,
		wrong_words: 0,
	});

	/**
	 * Get user stats after test timeout, send data to backend and finish the test.
	 */
	const finishTest = (stats: StatsType) => {
		console.log("user stats", stats);
		setStats(stats);
		setTestState("SHOWSTATS");
	};

	useEffect(() => {
		console.log("done!");
		console.log(testState);
		return () => {};
	}, []);

	// methods

	return <TestContext.Provider value={{ testState, stats, finishTest }}>{children}</TestContext.Provider>;
};

export default TestProvider;
