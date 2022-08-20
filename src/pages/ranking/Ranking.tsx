import { useEffect } from "react";

const Ranking = () => {
	useEffect(() => {
		console.log("rendered");

		return () => {};
	}, []);

	return <div>Ranking</div>;
};

export default Ranking;
