import { useState } from "react";
import Tester from "./Tester";

type TestStateType = "WARMUP" | "TESTING" | "SHOWSTATS";
export type StatsType = {
	id: string;
	errors_word_count: number;
	success_word_count: number;
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
		errors_word_count: 0,
		success_word_count: 0,
	});

	/**
	 * Get user stats after test timeout, send data to backend and finish the test.
	 */
	const finishTest = (stats: StatsType) => {
		console.log("user stats", stats);
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
		}, 3000);
	};

	return (
		<>
			{testState === "WARMUP" && (
				<>
					le quedan [x] oportunidades para hacer el test.
					<button onClick={startTest}>Empezar test</button>
					{isCounting && readyTime}
				</>
			)}
			{testState === "TESTING" && <Tester finishTest={finishTest} />}
			{testState === "SHOWSTATS" && <>show stats</>}
		</>
	);
};

export default SpeedTest;
