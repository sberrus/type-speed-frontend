import useAuth from "context/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
	// auth context
	const auth = useAuth();
	const session = auth?.isLogged();

	const { pathname } = useLocation();

	if (!session) {
		return <Navigate to="/auth" replace state={{ to: pathname }} />;
	}

	return (
		<>
			<Outlet />
		</>
	);
};

export default ProtectedRoute;
