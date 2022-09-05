// imports
import { Route, Routes } from "react-router-dom";
// pages
import Index from "@pages/index/Index";
import PageNotFound from "@pages/PageNotFound";
import AppTemplate from "templates/AppTemplate";
import ChangeUsername from "@pages/profile/ChangeUsername";
import UserRanking from "@pages/app/UserRanking";
import GeneralRanking from "@pages/ranking/GeneralRanking";
import Profile from "@pages/profile/Profile";
import ChangePassword from "@pages/profile/ChangePassword";
import ChangeSecret from "@pages/profile/ChangeSecret";
import WarmUp from "@pages/app/WarmUp";
import JETest from "@pages/app/JETest";
import Login from "@pages/auth/Login";
import Register from "@pages/auth/Register";
// routes config
import ProtectedAppRoute from "./ProtectedAppRoute";
import PublicRoute from "./PublicRoute";
import ForgotPassword from "@pages/auth/ForgotPassword";
// context

const MainRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<AppTemplate />}>
				{/* Public */}
				<Route index element={<Index />} />
				<Route path="ranking" element={<GeneralRanking />} />

				{/* Public Only */}
				<Route path="auth" element={<PublicRoute />}>
					<Route index element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="forgot-password" element={<ForgotPassword />} />
				</Route>

				{/* Protected */}
				<Route path="app" element={<ProtectedAppRoute />}>
					<Route index element={<WarmUp />} />
					<Route path="test" element={<JETest />} />
					<Route path="user-ranking" element={<UserRanking />} />
				</Route>
				<Route path="profile" element={<ProtectedAppRoute />}>
					<Route index element={<Profile />} />
					<Route path="change-username" element={<ChangeUsername />} />
					<Route path="change-password" element={<ChangePassword />} />
					<Route path="change-secret" element={<ChangeSecret />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};

export default MainRouter;
