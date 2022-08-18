import useAuth from "context/useAuth";
import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

type PublicRouteProps = {
	children: ReactElement;
};

const PublicRoute = () => {
	const auth = useAuth();
	const session = auth?.session;

	if (session) {
		return <Navigate to="/app" replace />;
	}

	return <Outlet />;
};

export default PublicRoute;
