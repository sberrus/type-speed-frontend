import { useState } from "react";
import Menu from "./Menu";
// components
import Stats from "./Stats";
import Tester from "./Tester";
// types
export type TestStateType = "MENU" | "TESTING" | "SHOWSTATS";
export type StatsType = {
	id: string;
	words_per_minute: number;
	valid_words: number;
	wrong_words: number;
};

const SpeedTest = () => {
	// Testing type
	const [testState, setTestState] = useState<TestStateType>("MENU");
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

	/**
	 * Manage App warmup logic and starts the test.
	 */
	const startTest = () => {
		setTestState("TESTING");
	};

	return (
		<>
			{testState === "MENU" && <Menu setTestState={setTestState} />}
			{testState === "TESTING" && <Tester finishTest={finishTest} />}
			{testState === "SHOWSTATS" && <Stats setTestState={setTestState} stats={stats} />}
		</>
	);
};

export default SpeedTest;
