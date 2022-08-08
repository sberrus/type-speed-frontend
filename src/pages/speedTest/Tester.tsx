import useDelay from "@utils/useDelay";
import React, { useEffect, useRef, useState } from "react";
import { StatsType } from "./SpeedTest";
import style from "./SpeedTest.module.scss";

type TesterProps = { finishTest: (stats: StatsType) => void };
const Tester = ({ finishTest }: TesterProps) => {
	const [isTesting, setIsTesting] = useState(true);
	const [wordToCopy, setWordToCopy] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt voluptas possimus est facilis eligendi sint veniam et mollitia magni assumenda velit, corrupti quasi ipsa quia. Consectetur aspernatur saepe nisi."
	);
	const [pointer, setPointer] = useState(0);
	const [isTyping, setIsTyping] = useState(false);
	const [correctWords, setCorrectWords] = useState("");
	const [errorCount, setErrorCount] = useState(0);
	const keysOmitted = ["Shift", "CapsLock", "Enter", "Tab", "Control", "AltGraph", "Alt", "Escape", "Backspace"];

	// delay hook
	const delay = useDelay();

	// test input behaviour
	const inputRef = useRef<HTMLInputElement>(null);
	const focusToInput = () => {
		inputRef?.current?.focus();
	};

	/**
	 * Main funtionality for each key press to compare if the key pressed is the same
	 * as the key to compare.
	 *
	 * Also, this functionality catch every mistake and use that info for the stats
	 */
	const checkWord = (e: React.KeyboardEvent) => {
		e.preventDefault();
		// to prevent this keys for Uppercases
		if (keysOmitted.includes(e.key)) {
			console.log("ommited");
			return;
		}

		if (e.key !== wordToCopy[pointer]) {
			setErrorCount((count) => count + 1);
		}

		// compare key pressed with pointer key
		if (e.key === wordToCopy[pointer]) {
			setCorrectWords((prevWords) => prevWords + e.key);
			setPointer((prev) => prev + 1);
			return;
		}
	};

	const getStats = () => {
		const stats: StatsType = {
			id: "pruebas!",
			errors_word_count: errorCount,
			success_word_count: correctWords.length,
		};
		return stats;
	};

	const sendResults = () => {
		console.log(getStats());
	};

	const start = async () => {
		// empezar test y temporizador 1min.

		// // Remove the input to avoid user interactions after timeout
		await delay(3000);
		sendResults();

		// console.log("done");
		// setIsTesting(false);

		// // get user stats
		// const stats = getStats();
		// console.log(stats);

		// // Send data to ranking backend.
		// // sendStatsToRanking();

		// // send data to SpeedTest component.
		// finishTest(stats);
	};

	useEffect(() => {
		inputRef.current?.focus();
		start();
		return () => {};
	}, []);

	//
	return (
		<>
			<div>
				stats:
				<br />
				correct words: {correctWords.length}
				<br />
				errors: {errorCount}
			</div>
			{isTesting ? (
				<>
					<div className={style.typeTestContainer} onClick={focusToInput}>
						<div defaultValue={wordToCopy} className={style.sampleText}>
							{wordToCopy}
						</div>
						<div defaultValue={wordToCopy} className={style.correctWords}>
							{correctWords}
							<span className={`${style.pointer} ${isTyping && style.isTyping}`}>{wordToCopy[pointer]}</span>
						</div>
						{/* input for test */}
						<input
							type="text"
							ref={inputRef}
							className={`${style.inputText}`}
							autoComplete="false"
							defaultValue={correctWords}
							onKeyDownCapture={(e) => {
								checkWord(e);
							}}
							onFocus={() => {
								setIsTyping(true);
							}}
							onBlur={() => {
								setIsTyping(false);
							}}
						/>
					</div>
				</>
			) : (
				<>
					<h5>Test finalizado gracias por participar</h5>
				</>
			)}
		</>
	);
};

export default Tester;
