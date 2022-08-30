// imports
import { useEffect, useState } from "react";
// api
import { getRanking } from "@api/ranking.api";
// components
import { TextDecoratorSecondary } from "@components/Decorators/CustomText";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
// styles
import style from "./AsideRanking.module.scss";
// types
type ScoresTypes = {
	id: string;
	words_per_minute: number;
	valid_words: number;
	wrong_words: number;
};
const AsideRanking = () => {
	const [scores, setScores] = useState<ScoresTypes[]>([]);

	const fetchTopTen = async () => {
		const scores = await getRanking();
		setScores(scores);
	};
	useEffect(() => {
		fetchTopTen();
		return () => {};
	}, []);

	return (
		<>
			<Col as="aside" lg={3} className={style.rankingWrapper}>
				{/* aside ranking header */}
				<div className={style.animationWrapper}>
					{/* contenedor texto personalizado */}
					<div className={style.textContainer}>
						<h2 className={style.text}>Ranking</h2>
						<h2 className={style.text}>Ranking</h2>
						<h2 className={style.text}>Ranking</h2>
					</div>

					{/* contenedor hojas */}
					<div className={style.natureContainer}>
						{/* hojas izquierda */}
						<div className={style.leafL}>
							<img src="" alt="" />
						</div>
						{/* hojas derecha */}
						<div className={style.leafR}>
							<img src="" alt="" />
						</div>
					</div>
				</div>
				{/* list */}
				<ListGroup variant="flush" className={style.participantList}>
					{scores.length > 0 ? (
						scores.map((record, count) => (
							<ListGroup.Item variant="light border-0" className={style.topTenParticipant} key={record.id}>
								<TextDecoratorSecondary>
									<>
										{count + 1}. {record.id}
									</>
								</TextDecoratorSecondary>
								<hr />
								<Container>
									<Row>
										<Col xs="4">
											<>
												<span title="Palabras por minuto" className="d-block">
													PPM
												</span>
												{record.words_per_minute}
											</>
										</Col>
										<Col xs="4">
											<>
												<span title="Precisión" className="d-block">
													Prec(%)
												</span>
												{(record.valid_words / record.wrong_words) * 100}%
											</>
										</Col>
										<Col xs="4">
											<>
												<span title="Total errores" className="d-block">
													Errores
												</span>
												{record.wrong_words}
											</>
										</Col>
									</Row>
								</Container>
							</ListGroup.Item>
						))
					) : (
						<h3>No records!</h3>
					)}
				</ListGroup>
			</Col>
		</>
	);
};

export default AsideRanking;
// TODO: CONNECT BBDD
