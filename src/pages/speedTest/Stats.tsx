// imports
import { Table } from "react-bootstrap";
// types
import { StatsType, TestStateType } from "./SpeedTest";
type StatsProps = {
	setTestState: React.Dispatch<React.SetStateAction<TestStateType>>;
	stats: StatsType;
};

const Stats = ({ setTestState, stats }: StatsProps) => {
	const handleClick = () => {
		setTestState("TESTING");
	};
	return (
		<>
			<button onClick={handleClick}>Try Again</button>
			<div>
				<div>
					Palabras por minuto: {(stats.words_per_minute / 60).toFixed(2)} LPS <br />
					Total palabras válidas: {stats.valid_words} <br />
					Total palabras erroneas: {stats.wrong_words} <br />
				</div>
			</div>
			<div>
				<h2>Actual Ranking</h2>
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>Username</th>
							<th>Total Letters</th>
							<th>Total Errors</th>
							<th>LPS</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>samdev</td>
							<td>35</td>
							<td>1</td>
							<td>0.56</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	);
};

export default Stats;
//
