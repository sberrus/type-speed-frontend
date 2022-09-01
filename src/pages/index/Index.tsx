// imports
import { Container, Row } from "react-bootstrap";
// components
import AsideRanking from "./AsideRanking";
import Content from "./Content";
// styles
import style from "./Index.module.scss";

const Index = () => {
	return (
		<div className={style.index}>
			{/* main */}
			<Container className="p-lg-4">
				<Row className={`${style.mainWrapper}`}>
					{/* sticky ranking */}
					<AsideRanking />
					<Content />
				</Row>
			</Container>
		</div>
	);
};

export default Index;
