// components
import { getUserScores } from "@api/ranking.api";
import { TextDecoratorPrimary } from "@components/Decorators/CustomText";
import useAuth from "context/useAuth";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { ScoresType } from "types/ranking";
// styles
import style from "./UserRanking.module.scss";

const UserRanking = () => {
	const [scores, setScores] = useState<ScoresType[]>([]);
	// hooks
	const auth = useAuth();

	// methods
	const fetchScores = async () => {
		const uid = auth?.session?.user.username as string;
		const _scores = await getUserScores(uid);
		setScores(_scores);
	};
	useEffect(() => {
		fetchScores();
		return () => {};
	}, []);

	return (
		<div className={style.userRanking}>
			<Container className={style.wrapper}>
				<h1 className="text-center mb-3">
					<TextDecoratorPrimary>Mi Historial</TextDecoratorPrimary>
				</h1>
				<div className={style.tableContainer}>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Palabras Por Minuto(PPM)</th>
								<th>Precisión(%)</th>
								<th>Letras por segundo(LPS)</th>
							</tr>
						</thead>
						<tbody>
							{scores.map((score, key) => (
								<tr key={key}>
									<td>{key + 1}</td>
									<td>{score.words_per_minute}</td>
									<td>{(Number(score.wrong_words / score.valid_words) * 100).toFixed(1)}%</td>
									<td>**Por definir**</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</Container>
		</div>
	);
};

export default UserRanking;
