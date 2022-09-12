// imports
import { Col, Container, Row } from "react-bootstrap";
// components
import { TextDecoratorPrimary, TextDecoratorSecondary } from "@components/Decorators/CustomText";
// assets
import Banner from "@assets/content/banner.svg";
import Decorator from "@assets/content/decorator.svg";
import Trophie from "@assets/art/trophie.svg";
import Register from "@assets/art/register.svg";
import Pizza from "@assets/art/pizza.svg";

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
		<Col as="main" lg={8} className={`${style.mainContent}`}>
			{/* hero */}
			<section className={style.heroSection}>
				<h2>
					<TextDecoratorPrimary>TORNEO JET SPEED</TextDecoratorPrimary>
				</h2>

				{/* REGLAS Y COMO PARTICIPAR CTA */}
				<div className={style.cta}>
					<div className={style.ctaImgContainer}>
						<img src={Register} alt="JE cta Image" />
					</div>
					<div className={style.ctaContent}>
						<h5>
							<TextDecoratorPrimary>REGLAS Y COMO PARTICIPAR</TextDecoratorPrimary>
						</h5>
						<ol>
							<li>
								Registrate creando tu cuenta en nuestra web <a href="/">www.jetspeedtest.com</a>
							</li>
							<li>Espera a inicios de semana que el torneo este activo</li>
							<li>Participa en el torneo</li>
						</ol>
						<a href="#rules" className={`${style.buttonPrimary} float-end col-6 col-md-4`}>
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
							<li>El primer lugar de cada categoría ganara...</li>
							<li>El segundo lugar de cada delegatoria se llevara a casa...</li>
							<li>El tercer lugar...</li>
						</ol>
						<a href="#rewards" className={`${style.buttonPrimary} col-6 col-md-4`}>
							<TextDecoratorSecondary>Ver más</TextDecoratorSecondary>
						</a>
					</div>
					<div className={style.ctaImgContainer}>
						<img src={Trophie} alt="JE cta Image" />
					</div>
				</div>

				{/* ABOUT CTA */}
				<div className={style.cta}>
					<div className={`${style.ctaImgContainer} ${style.pizza}`}>
						<img src={Pizza} alt="JE cta Image" />
					</div>
					<div className={style.ctaContent}>
						<h5>
							<TextDecoratorPrimary>SOBRE EL EVENTO</TextDecoratorPrimary>
						</h5>
						<p>
							El torneo empezara a inicios de semana junto a la jornada laboral, recuerda presentar el test en tu
							tiempo libre y de descanso para no. . .
						</p>
						<a href="#about" className={`${style.buttonPrimary} float-end col-6 col-md-4`}>
							<TextDecoratorSecondary>Ver más</TextDecoratorSecondary>
						</a>
					</div>
				</div>
			</section>

			{/* gif decorattion center */}
			<section className={style.gifContainer}>
				<img src={Decorator} alt="[GIF DECORATOR]" />
			</section>

			{/* description */}
			<section className={style.descriptionSection}>
				{/* rules section */}
				<article id="rules">
					<div id="reglas" style={{ position: "absolute", top: "-100px" }}></div>
					<h2 className="text-center">
						<div className={style.titleImgContainer}>
							<img src={Register} alt="" />
						</div>
						<TextDecoratorPrimary>REGLAS Y COMO PARTICIPAR</TextDecoratorPrimary>
					</h2>
					<Container>
						<div className={style.list}>
							<ol>
								<li>
									<span>Crea tu cuenta siguiendo los siguientes parámetros:</span>
									<ul>
										<li>Usuario (Nombre.Apellido) de 5 a 20 caracteres</li>
										<li>Contraseña de 5 a 20 caracteres</li>
										<li>
											Pregunta secreta
											<small>
												<b> (Una pregunta que solo puedas tu responder)</b>
											</small>
										</li>
										<li>Respuesta de la pregunta.</li>
									</ul>
								</li>
								<li>Espera que el evento este activo a inicios de la siguiente semana.</li>
								<li>¡Participa en el torneo y reta a tus compañero para ver quien es el mas rápido!</li>
							</ol>
							<p>
								Una vez presentes la prueba esta guardara tus 3 mejores resultados en las categorías de palabras
								por minuto (PPM), letras por segundo (LPS) y precisión de escritura (%). Estos resultados serán
								medidos junto a los otros participantes para luego poder ver quien ha sido el ganador del cada
								categoría.
							</p>
							<p>
								Los resultados se podrán observar a finalizar el torneo y serán premiados los ganadores
								respectivamente.
							</p>
							<p>Recuerda que siempre podrás presentar el test una vez mas para mejorar tus resultados.</p>
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
				{/* Rewards section */}
				<article>
					<div id="rewards" style={{ position: "absolute", top: "-100px" }}></div>
					<h2 className="text-center">
						<div className={style.titleImgContainer}>
							<img src={Trophie} alt="" />
						</div>
						<TextDecoratorPrimary>PREMIOS Y RECOMPENSAS</TextDecoratorPrimary>
					</h2>
					<h4>
						<TextDecoratorPrimary>Recompensas:</TextDecoratorPrimary>
					</h4>
					<div className={style.list}>
						<ul>
							<li>
								El primer lugar de cada categoría ganara una pegatina conmemorativa al evento y un llavero del
								torneo.
							</li>
							<li>El segundo lugar de cada delegatoria se llevara a casa una pegatina del torneo.</li>
							<li>El tercer lugar se llevara también una pegatina del torneo. Sobre el evento.</li>
						</ul>
					</div>
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
						El torneo se llevara acabo en las oficinas de Just Eat y se presentara en estas mismas, cada
						participante tendrá que presentarlo en su tiempo libre de manera proactiva. El torneo empezara el día
						lunes a inicios de horario laboral para luego seguir activo hasta el día Jueves hasta ultima hora para
						poder dar tiempo a todos los participantes a mejorar sus tiempos.
					</p>
					<p>
						Se guardaran en el sistema de ranking el mejor PPM (palabras por minuto), el mejor LPS (letras por
						segundo) y el mejor % de precisión. Estas 3 categorías serán premiadas a los 3 primeros lugares.
					</p>
				</article>
				{/* <article className={style.bannerContainer}>
					<img src={Banner} alt="Tournment Banner" />
				</article> */}
			</section>
		</Col>
	);
};

export default Content;
