// imports
import { Route, Routes } from "react-router-dom";
// pages
import Index from "@pages/index/Index";
import SpeedTest from "@pages/speedTest/SpeedTest";
import Login from "@pages/login/Login";
import PageNotFound from "@pages/PageNotFound";

const MainRouter = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Index />} />
				<Route path="type-speed-test" element={<SpeedTest />} />
				<Route path="auth">
					<Route index element={<Login />} />
				</Route>
			</Route>
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default MainRouter;
