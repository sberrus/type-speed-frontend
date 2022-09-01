// assets
import LEAF_L from "../assets/decorators/LEAF_L.svg";
import LEAF_R from "../assets/decorators/LEAF_R.svg";

// styles
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
					<img src={LEAF_L} alt="" />
					<img src={LEAF_L} alt="" />
					<img src={LEAF_L} alt="" />
				</div>
				{/* hojas derecha */}
				<div className={style.leafR}>
					<img src={LEAF_R} alt="" />
					<img src={LEAF_R} alt="" />
					<img src={LEAF_R} alt="" />
				</div>
			</div>
		</div>
	);
};

export default AnimatedTitle;
