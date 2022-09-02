// imports
import { useState } from "react";
import ChangeUsername from "./ChangeUsername";
import Landing from "./Landing";
// types
type ConfigStateType = "LANDING" | "CHANGE_PASSWORD" | "CHANGE_USERNAME" | "CHANGE_PIN";
export type ConfigStateProps = {
	changeConfigState: (state: ConfigStateType) => void;
};

//
const Profile = () => {
	const [configState, setConfigState] = useState<ConfigStateType>("LANDING");

	// methods
	const changeConfigState = (state: ConfigStateType) => {
		setConfigState(state);
	};

	//
	return (
		<>
			<div>{configState === "LANDING" && <Landing changeConfigState={changeConfigState} />}</div>
			<div>{configState === "CHANGE_USERNAME" && <ChangeUsername changeConfigState={changeConfigState} />}</div>
		</>
	);
};

export default Profile;
