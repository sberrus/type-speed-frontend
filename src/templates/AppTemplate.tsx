// imports
import NavbarMenu from "@components/NavbarMenu/NavbarMenu";
import { Outlet } from "react-router-dom";
// styles
import style from "./AppTemplete.module.scss";
// assets
import Footer from "@pages/index/Footer";
const AppTemplate = () => {
	return (
		<>
			<div className={style.mark1}>
				<div className={style.mark2}>
					<div className={style.mark3}>
						<NavbarMenu />
						<Outlet />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AppTemplate;
