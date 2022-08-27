import { Col, ListGroup } from "react-bootstrap";
import style from "./AsideRanking.module.scss";

// TODO: CONNECT BBDD
const AsideRanking = () => {
	return (
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
			<ListGroup numbered variant="flush" className={style.participantList}>
				<ListGroup.Item variant="light border-0" className={style.topTenParticipant}>
					<span className={style.participantName}>Cras justo odio</span>
				</ListGroup.Item>
				<ListGroup.Item variant="light border-0" className={style.topTenParticipant}>
					Dapibus ac facilisis in
				</ListGroup.Item>
				<ListGroup.Item variant="light border-0" className={style.topTenParticipant}>
					Morbi leo risus
				</ListGroup.Item>
				<ListGroup.Item variant="light border-0" className={style.topTenParticipant}>
					Porta ac consectetur ac
				</ListGroup.Item>
				<ListGroup.Item variant="light border-0" className={style.topTenParticipant}>
					Vestibulum at eros
				</ListGroup.Item>
				<ListGroup.Item variant="light border-0" className={style.topTenParticipant}>
					Vestibulum at eros
				</ListGroup.Item>
				<ListGroup.Item variant="light border-0" className={style.topTenParticipant}>
					Vestibulum at eros
				</ListGroup.Item>
				<ListGroup.Item variant="light border-0" className={style.topTenParticipant}>
					Vestibulum at eros
				</ListGroup.Item>
				<ListGroup.Item variant="light border-0" className={style.topTenParticipant}>
					Vestibulum at eros
				</ListGroup.Item>
				<ListGroup.Item variant="light border-0" className={style.topTenParticipant}>
					Vestibulum at eros
				</ListGroup.Item>
			</ListGroup>
		</Col>
	);
};

export default AsideRanking;
