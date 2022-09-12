// imports
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// components
import AnimatedTitle from "@components/AnimatedTitle";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
// assets
import Wpm from "@assets/gif/Wpm.gif";
import Lps from "@assets/gif/Lps.gif";
import Acc from "@assets/gif/Acc.gif";
// styles
import style from "./GeneralRanking.module.scss";
// types
import { ScoresType } from "types/ranking";
import { getRankingByCategory } from "@api/ranking.api";
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
		<div className={`${style.ranking}`}>
			<Container className={`${style.rankingWrapper}`}>
				<div className={style.personalRankingContainer}>
					<Link to="/profile/user-ranking" className={`${style.personalRankingButton}`}>
						<TextDecoratorSecondary>Ver ranking personal</TextDecoratorSecondary>
					</Link>
				</div>
				<AnimatedTitle />
				<Row>
					{/* Letters Per Second Ranking */}
					<Col as="section" className={style.rankingSection}>
						<div className={style.imgContainer}>
							<img src={Lps} alt="" className={style.img} />
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
												<span className="float-end">{Number(score.letters_per_second).toFixed(2)} LPS</span>
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
							<img src={Wpm} alt="" className={style.img} />
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
							<img src={Acc} alt="" className={style.img} />
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
												<span className="float-end">{(score.accuracy * 100).toFixed(2)}%</span>
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
