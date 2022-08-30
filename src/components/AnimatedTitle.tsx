import style from "./AnimatedTitle.module.scss";

const AnimatedTitle = () => {
	return (
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
	);
};

export default AnimatedTitle;
