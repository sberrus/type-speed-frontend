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
			<Container>
				<Row className={`${style.mainWrapper} p-2 p-sm-0`}>
					{/* sticky ranking */}
					<AsideRanking />
					<Content />
				</Row>
			</Container>
		</div>
	);
};

export default Index;
