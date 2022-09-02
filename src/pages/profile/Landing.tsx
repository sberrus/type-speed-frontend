import { ConfigStateProps } from "./Profile";

const Landing = ({ changeConfigState }: ConfigStateProps) => {
	return (
		<div>
			<button>Cambiar Username</button>
			<button>Cambiar Contraseña</button>
			<button>Cambiar PIN/SECRETO</button>
		</div>
	);
};

export default Landing;
