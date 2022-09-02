import TestProvider from "context/TestContext";
import Tester from "./Tester";

const JETest = () => {
	return (
		<TestProvider>
			<>
				<Tester />
			</>
		</TestProvider>
	);
};

export default JETest;
