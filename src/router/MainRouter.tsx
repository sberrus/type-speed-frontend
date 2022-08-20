// imports
import { Outlet, Route, Routes } from "react-router-dom";
// pages
import Index from "@pages/index/Index";
import SpeedTest from "@pages/speedTest/SpeedTest";
import Auth from "@pages/auth/Auth";
import PageNotFound from "@pages/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import AppTemplate from "templates/AppTemplate";

const MainRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<AppTemplate />}>
				{/* Public */}
				<Route index element={<Index />} />
				<Route
					path="ranking"
					element={
						<>
							<h5>Ranking</h5>
						</>
					}
				/>

				{/* Public Only */}
				<Route path="auth" element={<PublicRoute />}>
					<Route index element={<Auth />} />
					<Route path="profile" element={<>profile</>} />
				</Route>

				{/* Protected */}
				<Route path="app" element={<ProtectedRoute />}>
					<Route index element={<SpeedTest />} />
					<Route path="ranking" element={<>ranking</>} />
				</Route>
			</Route>
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default MainRouter;
