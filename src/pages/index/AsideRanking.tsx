// imports
import { useEffect, useState } from "react";
// api
import { getRanking } from "@api/ranking.api";
// components
import { TextDecoratorSecondary } from "@components/Decorators/CustomText";
import { Col, ListGroup } from "react-bootstrap";
import AnimatedTitle from "@components/AnimatedTitle";
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
				<AnimatedTitle />
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
