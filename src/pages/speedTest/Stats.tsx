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
		setTestState("WARMUP");
	};
	return (
		<>
			<button onClick={handleClick}>Try Again</button>
			<div>
				<div>
					Letters Per Second: {(stats.success_letters_count / 60).toFixed(2)} LPS <br />
					Total Letters: {stats.success_letters_count} <br />
					Total Errors: {stats.errors_letters_count} <br />
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
