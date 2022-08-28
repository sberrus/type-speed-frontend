import { useState } from "react";
// components
import Stats from "./Stats";
import Tester from "./Tester";
// types
export type TestStateType = "WARMUP" | "TESTING" | "SHOWSTATS";
export type StatsType = {
	id: string;
	words_per_minute: number;
	valid_words: number;
	wrong_words: number;
};

const SpeedTest = () => {
	// Warm up logic
	const [isCounting, setIsCounting] = useState(false);
	const [readyTime, setReadyTime] = useState(3);
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

	/**
	 * Manage App warmup logic and starts the test.
	 */
	const startTest = () => {
		setIsCounting(true);

		const interval = setInterval(() => {
			console.log("contando");
			setReadyTime((prev) => prev - 1);
		}, 1000);

		setTimeout(() => {
			console.log("Empezo el test");
			clearInterval(interval);
			setIsCounting(false);
			setTestState("TESTING");
		}, 0);
	};

	return (
		<>
			{testState === "WARMUP" && (
				<>
					<button onClick={startTest}>Empezar test</button>
					{isCounting && readyTime}
				</>
			)}
			{testState === "TESTING" && <Tester finishTest={finishTest} />}
			{testState === "SHOWSTATS" && <Stats setTestState={setTestState} stats={stats} />}
		</>
	);
};

export default SpeedTest;
