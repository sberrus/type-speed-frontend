import { useEffect } from "react";

const PublicRanking = () => {
	useEffect(() => {
		console.log("rendered");

		return () => {};
	}, []);

	return <div>Ranking</div>;
};

export default PublicRanking;
