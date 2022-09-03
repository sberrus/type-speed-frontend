// components
import Tester from "./Tester";
// context
import useTest from "context/useTest";
import TestProvider from "context/TestContext";
import { useEffect } from "react";

const JETest = () => {
	// hooks
	const test = useTest();
	useEffect(() => {
		console.log(test?.testState);

		return () => {};
	}, []);

	return (
		<TestProvider>
			<Tester />
		</TestProvider>
	);
};

export default JETest;
