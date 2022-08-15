import { Link } from "react-router-dom";
import style from "./Index.module.scss";

const Index = () => {
	return (
		<div>
			<div className={style.main}>
				<Link to="app" className={style.buttonPrimary}>
					Ir a Speed Test ⌨️
				</Link>
				<Link to="auth" className={style.buttonPrimary}>
					Auth 🔒
				</Link>
			</div>
		</div>
	);
};

export default Index;
