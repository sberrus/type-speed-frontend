// imports
import { Container, Row } from "react-bootstrap";
// components
import AsideRanking from "./AsideRanking";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
// styles
import style from "./Index.module.scss";

const Index = () => {
	return (
		<div className={style.wrapper}>
			<Header />
			{/* main */}
			<Container>
				<Row className={`${style.mainWrapper}`}>
					{/* sticky ranking */}
					<AsideRanking />
					<Content />
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Index;
