import { Link } from "react-router-dom";
import style from "./Index.module.scss";

const Index = () => {
	return (
		<div>
			<div className={style.main}>
				<Link to="type-speed-test" className={style.buttonPrimary}>
					Ir a Speed Test
				</Link>
				<p>Esto es solo para desarrollo luego trabajamos en la landing page</p>
			</div>
		</div>
	);
};

export default Index;
