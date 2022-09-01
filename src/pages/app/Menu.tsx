// imports
import { useRef, useState } from "react";
// components
import { TextDecoratorSecondary } from "@components/Decorators/CustomText";
import { Link } from "react-router-dom";
// styles
import style from "./SpeedTest.module.scss";
// types
import { TestStateType } from "./SpeedTest";
interface LandingProps {
	setTestState: (state: TestStateType) => void;
}

//
const Menu = ({ setTestState }: LandingProps) => {
	// states
	const [count, setCount] = useState(3);
	const [isCounting, setIsCounting] = useState(false);

	// methods
	const startCountdown = () => {
		const interval = setInterval(() => {
			setCount((prev) => prev - 1);
		}, 1000);
		setTimeout(() => {
			clearInterval(interval);
			setCount(3);
			setTestState("TESTING");
		}, 3000);
	};

	const startTest = () => {
		startCountdown();
		setIsCounting(true);
		setTimeout(() => {
			setIsCounting(false);
			// empezar test
			// setTestState("TESTING");
		}, 3000);
	};

	return (
		<div className={style.landing}>
			<div className={style.menuContainer}>
				{isCounting ? (
					<h2>
						<TextDecoratorSecondary>
							<>El test empieza en {count}</>
						</TextDecoratorSecondary>
					</h2>
				) : (
					<div className={style.buttons}>
						<Link to="/app/ranking" className={style.button}>
							<TextDecoratorSecondary>Mi Ranking</TextDecoratorSecondary>
						</Link>
						<button className={style.button} onClick={startTest}>
							<TextDecoratorSecondary>Empezar test!</TextDecoratorSecondary>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Menu;
