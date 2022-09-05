// imports
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
// components
import { Col, Container, Row } from "react-bootstrap";
import { TextDecoratorSecondary } from "@components/Decorators/CustomText";
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
		<Container>
			<div className={style.landing}>
				<div className={style.menuContainer}>
					<BrowserView>
						{isCounting ? (
							<h2 className="mt-5">
								<TextDecoratorSecondary>
									<>El test empieza en {count}</>
								</TextDecoratorSecondary>
							</h2>
						) : (
							<div className={style.buttonsContainer}>
								<Container>
									<Row>
										<Col lg={12} className={style.center}>
											<button className={`${style.button}`} onClick={startTest}>
												<TextDecoratorSecondary>Empezar test!</TextDecoratorSecondary>
											</button>
										</Col>
									</Row>
								</Container>
							</div>
						)}
					</BrowserView>
					<MobileView>
						<div className={style.buttonsContainer}>
							<Container>
								<Row>
									<Col lg={12} className={style.center}>
										<p>Actualmente esta app solo es válida para usar en Desktop</p>
										<Link to="/ranking" className={`${style.button}`} onClick={startTest}>
											<TextDecoratorSecondary>Ir a Ranking</TextDecoratorSecondary>
										</Link>
									</Col>
								</Row>
							</Container>
						</div>
					</MobileView>
				</div>
			</div>
		</Container>
	);
};

export default WarmUp;
