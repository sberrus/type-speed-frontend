import { Col } from "react-bootstrap";
import style from "./Index.module.scss";

const Content = () => {
	return (
		<Col as="main" lg={8} className={style.mainContent}>
			{/* hero */}
			<section className={style.heroSection}>
				<h2 className={style.pageHeaderTitle}>TORNEO JET SPEED</h2>
				<div className={style.cta}>
					<div className={style.ctaImgContainer}>
						<img src="" alt="JE cta Image" />
					</div>
					<div className={style.ctaContent}>
						<h5 className={style.secondaryHeading} data-text="REGLAS Y COMO PARTICIPAR">
							REGLAS Y COMO PARTICIPAR
						</h5>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magnam labore odit sed, tempora
							possimus ad vel quia veritatis earum neque eligendi aliquid ipsa dolor assumenda voluptatibus
							tempore corrupti nulla!
						</p>
					</div>
				</div>
				<div className={style.cta}>
					<div className={style.ctaContent}>
						<h5 className={style.secondaryHeading} data-text="REGLAS Y COMO PARTICIPAR">
							REGLAS Y COMO PARTICIPAR
						</h5>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magnam labore odit sed, tempora
							possimus ad vel quia veritatis earum neque eligendi aliquid ipsa dolor assumenda voluptatibus
							tempore corrupti nulla!
						</p>
					</div>
					<div className={style.ctaImgContainer}>
						<img src="" alt="JE cta Image" />
					</div>
				</div>
				<div className={style.cta}>
					<div className={style.ctaImgContainer}>
						<img src="" alt="JE cta Image" />
					</div>
					<div className={style.ctaContent}>
						<h5 className={style.secondaryHeading} data-text="REGLAS Y COMO PARTICIPAR">
							REGLAS Y COMO PARTICIPAR
						</h5>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magnam labore odit sed, tempora
							possimus ad vel quia veritatis earum neque eligendi aliquid ipsa dolor assumenda voluptatibus
							tempore corrupti nulla!
						</p>
					</div>
				</div>
			</section>

			{/* description */}
			<section className={style.descriptionSection}>
				<article id="explicacion">
					<h5 className={style.secondaryHeading} data-text="REGLAS Y COMO PARTICIPAR">
						REGLAS Y COMO PARTICIPAR
					</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tempore veniam sapiente ab impedit nulla
						molestias eveniet asperiores aut deleniti facilis explicabo aspernatur officiis. Voluptatem voluptates
						nesciunt non quaerat? Mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
						provident dolor officia quod dolores mollitia laboriosam maiores, minima vero est architecto debitis
						harum veniam quam a? Et, vel! Voluptatem, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Tenetur enim maiores est distinctio voluptatum, necessitatibus quisquam ad nihil eos odit harum
						illum nesciunt beatae obcaecati natus itaque veniam rem? Magnam.
					</p>
				</article>
				<article id="reglas">
					<h5 className={style.secondaryHeading} data-text="REGLAS Y COMO PARTICIPAR">
						REGLAS Y COMO PARTICIPAR
					</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat laborum porro aspernatur
						eaque, aliquam aut totam praesentium qui! Numquam placeat a beatae magni commodi? Delectus accusamus
						optio pariatur ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia assumenda
						exercitationem magni reiciendis iure consequuntur voluptatem? Quisquam consequuntur repellat sunt
						nesciunt, sint vero omnis odit, aut atque, cum sequi non!
					</p>
				</article>
				<article id="premios">
					<h5 className={style.secondaryHeading} data-text="REGLAS Y COMO PARTICIPAR">
						REGLAS Y COMO PARTICIPAR
					</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam, quia alias reiciendis non eum.
						Aspernatur iusto harum doloribus maxime adipisci corporis autem repudiandae enim? Beatae itaque
						laborum debitis dolor? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro natus,
						praesentium alias quidem quia ea numquam temporibus ipsam reprehenderit harum quaerat eligendi debitis
						corporis ullam magni labore laudantium modi libero.
					</p>
				</article>
			</section>
		</Col>
	);
};

export default Content;
