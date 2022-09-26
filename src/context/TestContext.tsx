// imports
import { saveNewScore } from "@api/ranking.api";
import { createContext, useState } from "react";
import { RawScoreType } from "types/ranking";
import { TestContextInterface, TestContextProps, TestStateType, WordsType } from "types/test";
import useAuth from "./useAuth";

//
export const TestContext = createContext<TestContextInterface | null>(null);
const TestProvider = ({ children }: TestContextProps) => {
	// hooks
	const auth = useAuth();
	// Testing type
	const [testState, setTestState] = useState<TestStateType>("TESTING");
	const [isSending, setIsSending] = useState(false);
	// Show Stats
	const [stats, setStats] = useState<RawScoreType | null>(() => {
		// try to get data from localstorage
		const lastTry = localStorage.getItem("last-try");
		if (lastTry) return JSON.parse(lastTry);

		// return null if no data
		return null;
	});

	// methods
	const saveTest = async (score: WordsType[]) => {
		// init loader
		setIsSending(true);

		// getData
		const id = auth?.session?.user.username;
		const token = auth?.session?.token;

		// persist data in db, localstorage and state
		const { data } = await saveNewScore(score, id as string, token as string);
		localStorage.setItem("last-try", JSON.stringify(data));
		setStats(data);

		// complete loader
		setIsSending(false);
	};

	return <TestContext.Provider value={{ testState, stats, saveTest, isSending }}>{children}</TestContext.Provider>;
};

export default TestProvider;
