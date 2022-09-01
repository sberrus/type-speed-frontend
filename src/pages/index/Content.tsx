// imports
import { Col, Container, Row } from "react-bootstrap";
// components
import { TextDecoratorPrimary, TextDecoratorSecondary } from "@components/Decorators/CustomText";
// assets
// import Banner from "@assets/img/banner.svg";
// import Decorator from "@assets/img/decorator.svg";
// import Trophie from "@assets/icons/trophie.svg";
// import Register from "@assets/icons/register.svg";
// import Pizza from "@assets/icons/pizza.svg";
import Wpm from "@assets/categories/Wpm.svg";
import Lps from "@assets/categories/Lps.svg";
import Acc from "@assets/categories/Acc.svg";
// styles
import style from "./Index.module.scss";

// TODO: Componetizar botones para contenido
// TODO: INCORPORAR COPY DE FIGMA
//

const Content = () => {
	return (
		<Col as="main" lg={8} className={style.mainContent}>
			{/* hero */}
			<section className={style.heroSection}>
				<h2>
					<TextDecoratorPrimary>TORNEO JET SPEED</TextDecoratorPrimary>
				</h2>

				{/* REGLAS Y COMO PARTICIPAR CTA */}
				<div className={style.cta}>
					<div className={style.ctaImgContainer}>
						<img src={"Register"} alt="JE cta Image" />
					</div>
					<div className={style.ctaContent}>
						<h5>
							<TextDecoratorPrimary>REGLAS Y COMO PARTICIPAR</TextDecoratorPrimary>
						</h5>
						<ol>
							<li>Registrate creando tu cuenta en nuestra web</li>
							<li>Espera a que el torneo este activo</li>
							<li>Participa en el evento</li>
						</ol>
						<a href="#reglas" className={`${style.buttonPrimary} float-end`}>
							<TextDecoratorSecondary>Ver más</TextDecoratorSecondary>
						</a>
					</div>
				</div>

				{/* PREMIOS CTA */}
				<div className={style.cta}>
					<div className={style.ctaContent}>
						<h5>
							<TextDecoratorPrimary>PREMIOS Y RECOMPENSAS</TextDecoratorPrimary>
						</h5>
						<ol>
							<li>El primer lugar recibira.....</li>
							<li>Los primero 3 en el ranking recibiran..... </li>
							<li>Los primero 100 participantes tendran una recompensa...</li>
						</ol>
						<a href="#premios" className={style.buttonPrimary}>
							<TextDecoratorSecondary>Ver más</TextDecoratorSecondary>
						</a>
					</div>
					<div className={style.ctaImgContainer}>
						<img src={"Trophie"} alt="JE cta Image" />
					</div>
				</div>

				{/* ABOUT CTA */}
				<div className={style.cta}>
					<div className={`${style.ctaImgContainer} ${style.pizza}`}>
						<img src={"Pizza"} alt="JE cta Image" />
					</div>
					<div className={style.ctaContent}>
						<h5>
							<TextDecoratorPrimary>SOBRE EL EVENTO</TextDecoratorPrimary>
						</h5>
						<p>
							El torneo empezará un dia lunes desde inicio de horario laboral hasta el dia viernes que se
							presentarán los........
						</p>
						<a href="#about" className={`${style.buttonPrimary} float-end`}>
							<TextDecoratorSecondary>Ver más</TextDecoratorSecondary>
						</a>
					</div>
				</div>
			</section>

			{/* gif decorattion center */}
			<section className={style.gifContainer}>
				<img src={"Decorator"} alt="[GIF DECORATOR]" />
			</section>

			{/* description */}
			<section className={style.descriptionSection}>
				<article id="explicacion">
					<div id="reglas" style={{ position: "absolute", top: "-100px" }}></div>
					<h2 className="text-center">
						<div className={style.titleImgContainer}>
							<img src={"Register"} alt="" />
						</div>
						<TextDecoratorPrimary>PREMIOS Y RECOMPENSAS</TextDecoratorPrimary>
					</h2>
					<Container>
						<div className={style.list}>
							<ol>
								<li>
									<span>Crea tu cuenta con lo siguientes parámetros.</span>
									<ul>
										<li>Apodo</li>
										<li>Contraseña</li>
										<li>
											PIN{" "}
											<small>
												<b>*importante para recuperar su contraseña</b>
											</small>
										</li>
									</ul>
								</li>
								<li>Esperar a que el evento este activo.</li>
								<li>Participa en el torneo y gana premios.</li>
							</ol>
							<p>Una vez presentes el Test se guardara tu mejor resultado en 3 categorias diferentes:</p>
						</div>

						<Row className={`${style.categories}`}>
							<Col xs={4} className={style.categoriesImgContainer}>
								<img src={Wpm} alt="PPM" />
							</Col>
							<Col xs={4} className={style.categoriesImgContainer}>
								<img src={Lps} alt="LPS" />
							</Col>
							<Col xs={4} className={style.categoriesImgContainer}>
								<img src={Acc} alt="%PRECISION" />
							</Col>
						</Row>
						<p>
							3.- Una vez precentes el test y este guarde tus mejores datos tendras que esperar hasta la
							finalización y premiación para saber los resultados. <br />
							<br />
							Recuerda que siempre puedes presentar el test otra vez para mejorar tus resultados
						</p>
					</Container>
				</article>
				<article>
					<div id="premios" style={{ position: "absolute", top: "-100px" }}></div>
					<h2 className="text-center">
						<div className={style.titleImgContainer}>
							<img src={"Trophie"} alt="" />
						</div>
						<TextDecoratorPrimary>PREMIOS Y RECOMPENSAS</TextDecoratorPrimary>
					</h2>
					<Row>
						<Col>
							<h4>
								<TextDecoratorPrimary>Recompensas:</TextDecoratorPrimary>
							</h4>
							<p>
								Los primero 100 participantes tendran recompensa una pegatina conmemorativa que tendras que
								reclamar contactando con el equipo organizador.
							</p>
						</Col>
						<Col>
							<h4>
								<TextDecoratorPrimary>Premios:</TextDecoratorPrimary>
							</h4>
							<div className={style.list}>
								<ul>
									<li>El primer lugar recibira una GiftCard de 100€</li>
									<li>
										Los primero 3 en el ranking recibiran una pequeña KeyCap conmemorativa al respectivo
										puesto.
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</article>
				<article>
					<div id="about" style={{ position: "absolute", top: "-100px" }}></div>
					<h2 className="text-center">
						<TextDecoratorPrimary>SOBRE EL EVENTO</TextDecoratorPrimary>
					</h2>
					<h4>
						<TextDecoratorPrimary>Información:</TextDecoratorPrimary>
					</h4>
					<p>
						El torneo empezará un dia lunes XXX desde inicio de horario laboral (9:00) hasta el dia viernes XXX
						sobre las 9:00 que se presentarán los resultados, cada participante puede presentar el test el dia que
						quiera con tal y las veces que quiera con tal y esté entre el plazo de dias establecidos. Se guardaran
						en el sistema de ranking el mejor PPm (palabras por minuto), el mejor LPS (letras por segundo) y el
						mejor % de precisión. Estas 3 categorias seran premiadas a los 3 primeros lugares.
					</p>
				</article>
				<article className={style.bannerContainer}>{/* <img src={Banner} alt="Tournment Banner" /> */}</article>
			</section>
		</Col>
	);
};

export default Content;
