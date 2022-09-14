// imports
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// context
import useTest from "context/useTest";
// styles
import style from "./stats.module.scss";
import { TextDecoratorSecondary } from "@components/Decorators/CustomText";

const Stats = () => {
	const test = useTest();

	return (
		<div className={style.stats}>
			<Container className={style.dataContainer}>
				<Link to="/app" className={style.tryAgainButton}>
					Try Again
				</Link>

				{/* Score sent to backend and status */}
				<div className={style.dataSent}>
					<div className={style.scores}>
						<div className={style.dataHolder}>
							<div className={style.circleMask}>
								<span className={style.data}>{test?.stats?.total_letters}</span>
							</div>
							<h5>
								<TextDecoratorSecondary>Letras Por Segundo</TextDecoratorSecondary>
							</h5>
						</div>
						<div className={style.dataHolder}>
							<div className={style.circleMask}>
								<span className={style.data}>{test?.stats?.valid_words}</span>
							</div>
							<h5>
								<TextDecoratorSecondary>Palabras Por Minuto</TextDecoratorSecondary>
							</h5>
						</div>
						<div className={style.dataHolder}>
							<div className={style.circleMask}>
								<span className={style.data}>
									{(test?.stats?.wrong_words ?? 0) / (test?.stats?.valid_words ?? 0) === 0
										? "100%"
										: `${(((test?.stats?.wrong_words ?? 0) / (test?.stats?.valid_words ?? 0)) * 100).toFixed(
												2
										  )}%`}
								</span>
							</div>
							<h5>
								<TextDecoratorSecondary>Precisión</TextDecoratorSecondary>
							</h5>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Stats;
//
