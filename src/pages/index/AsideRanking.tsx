import { Col, ListGroup } from "react-bootstrap";
import style from "./Index.module.scss";

// TODO: CONNECT BBDD
const AsideRanking = () => {
	return (
		<Col as="aside" xs={3} className={style.rankingWrapper}>
			<div className={style.imgContainer}>
				<img src="" alt="imagen" />
			</div>
			<header>
				<h4>Ranking</h4>
			</header>
			{/* list */}
			<ListGroup numbered variant="flush">
				<ListGroup.Item variant="light border-0">Cras justo odio</ListGroup.Item>
				<ListGroup.Item variant="light border-0">Dapibus ac facilisis in</ListGroup.Item>
				<ListGroup.Item variant="light border-0">Morbi leo risus</ListGroup.Item>
				<ListGroup.Item variant="light border-0">Porta ac consectetur ac</ListGroup.Item>
				<ListGroup.Item variant="light border-0">Vestibulum at eros</ListGroup.Item>
				<ListGroup.Item variant="light border-0">Vestibulum at eros</ListGroup.Item>
				<ListGroup.Item variant="light border-0">Vestibulum at eros</ListGroup.Item>
				<ListGroup.Item variant="light border-0">Vestibulum at eros</ListGroup.Item>
				<ListGroup.Item variant="light border-0">Vestibulum at eros</ListGroup.Item>
				<ListGroup.Item variant="light border-0">Vestibulum at eros</ListGroup.Item>
			</ListGroup>
		</Col>
	);
};

export default AsideRanking;
