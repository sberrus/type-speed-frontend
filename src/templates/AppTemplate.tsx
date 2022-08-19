import NavbarMenu from "@components/NavbarMenu/NavbarMenu";
import { Outlet } from "react-router-dom";

const AppTemplate = () => {
	return (
		<>
			<NavbarMenu />
			<Outlet />
		</>
	);
};

export default AppTemplate;
