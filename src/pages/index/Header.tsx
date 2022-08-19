// styles
import style from "./Index.module.scss";
// assets
import placeholder from "../../assets/img/1_1.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className={style.header}>
			<Container className={style.headerWrapper}>
				<div className={style.imgContainer}>
					<img src={placeholder} alt="just eat header img" />
				</div>
				<div className={style.authContainer}>
					<div className={style.authButtons}>
						<Link to="auth" state={{ to: "Login" }}>
							<button>Login</button>
						</Link>
						<Link to="auth" state={{ to: "Register" }}>
							<button>Register</button>
						</Link>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
