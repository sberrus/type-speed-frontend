// imports
import { useEffect, useState } from "react";
// components
import AnimatedTitle from "@components/AnimatedTitle";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
// assets
import PPM from "@assets/decorators/PPM.svg";
import LPS from "@assets/decorators/LPS.svg";
import ACCU from "@assets/decorators/ACCU.svg";
// types
import { ScoresType } from "types/ranking";
import { getRankingByCategory } from "@api/ranking.api";
// styles
import style from "./GeneralRanking.module.scss";
import { TextDecoratorSecondary } from "@components/Decorators/CustomText";

const GeneralRanking = () => {
	// states
	const [WPMRanking, setPPMRanking] = useState<ScoresType[]>([]);
	const [LPSRanking, setLPSRanking] = useState<ScoresType[]>([]);
	const [ACCRanking, setACCRanking] = useState<ScoresType[]>([]);
	// methods
	const fetchRankingByPPM = async () => {
		const PPMScore = await getRankingByCategory("words_per_minute");
		setPPMRanking(PPMScore);
	};
	const fetchRankingByLPS = async () => {
		const LPSScore = await getRankingByCategory("letters_per_second");
		setLPSRanking(LPSScore);
	};
	const fetchRankingByACC = async () => {
		const ACCScore = await getRankingByCategory("accuracy");
		setACCRanking(ACCScore);
	};
	useEffect(() => {
		fetchRankingByPPM();
		fetchRankingByLPS();
		fetchRankingByACC();
		return () => {};
	}, []);

	return (
		<div className={style.ranking}>
			<Container className={style.rankingWrapper}>
				<AnimatedTitle />
				<Row>
					{/* Letters Per Second Ranking */}
					<Col as="section" className={style.rankingSection}>
						<div className={style.imgContainer}>
							<img src={LPS} alt="" className={style.img} />
						</div>
						<div className={style.listWrapper}>
							<ListGroup>
								{LPSRanking.map((score, key) => (
									<ListGroup.Item key={score.id}>
										<TextDecoratorSecondary>
											<>
												<span>
													{key + 1}. {score.id}
												</span>{" "}
												<span className="float-end">{score.letters_per_second} LPS</span>
											</>
										</TextDecoratorSecondary>
									</ListGroup.Item>
								))}
							</ListGroup>
						</div>
					</Col>
					{/* Words Per Minute Ranking */}
					<Col as="section" className={style.rankingSection}>
						<div className={`${style.imgContainer} align-items-lg-start`}>
							<img src={PPM} alt="" className={style.img} />
						</div>
						<div className={style.listWrapper}>
							<ListGroup>
								{WPMRanking.map((score, key) => (
									<ListGroup.Item key={score.id}>
										<TextDecoratorSecondary>
											<>
												<span>
													{key + 1}. {score.id}
												</span>{" "}
												<span className="float-end">{score.words_per_minute} PPM</span>
											</>
										</TextDecoratorSecondary>
									</ListGroup.Item>
								))}
							</ListGroup>
						</div>
					</Col>
					{/* Accuracy Ranking */}
					<Col as="section" className={style.rankingSection}>
						<div className={style.imgContainer}>
							<img src={ACCU} alt="" className={style.img} />
						</div>
						<div className={style.listWrapper}>
							<ListGroup>
								{ACCRanking.map((score, key) => (
									<ListGroup.Item key={score.id}>
										<TextDecoratorSecondary>
											<>
												<span>
													{key + 1}. {score.id}
												</span>{" "}
												<span className="float-end">{score.accuracy * 100}%</span>
											</>
										</TextDecoratorSecondary>
									</ListGroup.Item>
								))}
							</ListGroup>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default GeneralRanking;
