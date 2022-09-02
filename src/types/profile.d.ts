// types
export type ConfigStateType = "LANDING" | "CHANGE_PASSWORD" | "CHANGE_USERNAME" | "CHANGE_PIN";
export type ConfigStateProps = {
	changeConfigState: (state: ConfigStateType) => void;
};
