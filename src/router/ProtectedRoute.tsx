import NavbarMenu from "@components/NavbarMenu/NavbarMenu";
import useAuth from "context/useAuth";
import { ReactElement } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
	children: ReactElement;
};

const ProtectedRoute = () => {
	// auth context
	const auth = useAuth();
	const session = auth?.session;

	const { pathname } = useLocation();

	if (!session) {
		return <Navigate to="/auth" replace state={{ pathname }} />;
	}

	return (
		<>
			<NavbarMenu />
			<Outlet />
		</>
	);
};

export default ProtectedRoute;

// TODO: SAVE LAST USER ROUTE WHEN USER TRY TO GET IN SOME PROTECTED ROUTE FOR RETURN IT TO THE ROUTE AFTER LOGIN
