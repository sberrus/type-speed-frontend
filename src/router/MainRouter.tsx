// imports
import { Route, Routes } from "react-router-dom";
// pages
import Index from "@pages/index/Index";
import SpeedTest from "@pages/speedTest/SpeedTest";

const MainRouter = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Index />} />
				<Route path="type-speed-test" element={<SpeedTest />} />
			</Route>
		</Routes>
	);
};

export default MainRouter;
