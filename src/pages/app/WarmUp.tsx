// imports
import { useEffect, useRef, useState } from "react";
// components
import { Col, Container, Row } from "react-bootstrap";
import { TextDecoratorSecondary } from "@components/Decorators/CustomText";
import { Link, useNavigate } from "react-router-dom";
// styles
import style from "./SpeedTest.module.scss";

//
const WarmUp = () => {
	// hooks
	const navigate = useNavigate();
	// refs
	const timeoutRef = useRef<number>();
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
		}, 3000);
	};

	const startTest = () => {
		startCountdown();
		setIsCounting(true);
		timeoutRef.current = setTimeout(() => {
			setIsCounting(false);
			// empezar test
			navigate("test");
		}, 3000);
	};

	useEffect(() => {
		return () => {
			clearInterval(timeoutRef.current);
		};
	}, []);

	//
	return (
		<div className={style.landing}>
			<div className={style.menuContainer}>
				{isCounting ? (
					<>
						<h2>
							<TextDecoratorSecondary>
								<>El test empieza en {count}</>
							</TextDecoratorSecondary>
						</h2>
					</>
				) : (
					<div className={style.buttonsContainer}>
						<Container>
							<Row>
								<Col xs={12} className={style.rankingContainer}>
									<Link to="user-ranking" className={style.rankingButton}>
										Ver mi ranking
									</Link>
								</Col>
								<Col lg={12}>
									<button className={`${style.button}`} onClick={startTest}>
										<TextDecoratorSecondary>Empezar test!</TextDecoratorSecondary>
									</button>
								</Col>
							</Row>
						</Container>
					</div>
				)}
			</div>
		</div>
	);
};

export default WarmUp;
