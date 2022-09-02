import { useContext } from "react";
import { TestContext } from "./TestContext";

export default function useTest() {
	return useContext(TestContext);
}
