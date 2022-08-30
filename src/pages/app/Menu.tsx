import { TextDecoratorSecondary } from "@components/Decorators/CustomText";
import { Link } from "react-router-dom";
import { TestStateType } from "./SpeedTest";
import style from "./SpeedTest.module.scss";

interface MenuProps {
	setTestState: (state: TestStateType) => void;
}

const Menu = ({ setTestState }: MenuProps) => {
	return (
		<div className={style.menuWrapper}>
			<div className={style.menuContainer}>
				<div className={style.buttons}>
					<Link to="/app/ranking" className={style.button}>
						<TextDecoratorSecondary>Historial</TextDecoratorSecondary>
					</Link>
					<button className={style.button}>
						<TextDecoratorSecondary>Empezar test!</TextDecoratorSecondary>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Menu;
