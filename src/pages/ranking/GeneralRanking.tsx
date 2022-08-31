// components
import AnimatedTitle from "@components/AnimatedTitle";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
// styles
import style from "./GeneralRanking.module.scss";
// assets
import PPM from "@assets/decorators/PPM.svg";
import LPS from "@assets/decorators/LPS.svg";
import ACCU from "@assets/decorators/ACCU.svg";

const GeneralRanking = () => {
	return (
		<div className={style.ranking}>
			<Container className={style.rankingWrapper}>
				<AnimatedTitle />
				<Row>
					<Col as="section" className={style.rankingSection}>
						<div className={style.imgContainer}>
							<img src={LPS} alt="" className={style.img} />
						</div>
						<div className={style.listWrapper}>
							<ListGroup>
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
								<ListGroup.Item>Morbi leo risus</ListGroup.Item>
								<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
								<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
							</ListGroup>
						</div>
					</Col>
					<Col as="section" className={style.rankingSection}>
						<div className={style.imgContainerCenter}>
							<img src={PPM} alt="" className={style.img} />
						</div>
						<div className={style.listWrapper}>
							<ListGroup>
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
								<ListGroup.Item>Morbi leo risus</ListGroup.Item>
								<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
								<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
							</ListGroup>
						</div>
					</Col>
					<Col as="section" className={style.rankingSection}>
						<div className={style.imgContainer}>
							<img src={ACCU} alt="" className={style.img} />
						</div>
						<div className={style.listWrapper}>
							<ListGroup>
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
								<ListGroup.Item>Morbi leo risus</ListGroup.Item>
								<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
								<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
							</ListGroup>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default GeneralRanking;
