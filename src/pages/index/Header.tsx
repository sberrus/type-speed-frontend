// styles
import style from "./Index.module.scss";
// assets
import placeholder from "../../assets/img/1_1.jpg";
import { Container } from "react-bootstrap";

const Header = () => {
	return (
		<header className={style.header}>
			<Container className={style.headerWrapper}>
				<div className={style.imgContainer}>
					<img src={placeholder} alt="just eat header img" />
				</div>
				<div className={style.authContainer}>
					<div className={style.authButtons}>
						<button>Login</button>
						<button>Register</button>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
