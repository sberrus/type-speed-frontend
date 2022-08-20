import { StateType } from "@pages/auth/Auth";
import useAuth from "context/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoute = () => {
	const auth = useAuth();
	const location = useLocation();
	const state = location.state as StateType;
	const session = auth?.session;

	if (session) {
		if (state?.to) {
			return <Navigate to={state?.to} replace />;
		}
		return <Navigate to="/app" replace />;
	}

	return <Outlet />;
};

export default PublicRoute;
