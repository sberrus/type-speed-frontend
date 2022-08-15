// imports
import React, { useEffect, useRef, useState } from "react";
// hooks
import useDelay from "hooks/useDelay";
// styles
import style from "./SpeedTest.module.scss";
// types
import { StatsType } from "./SpeedTest";

type TesterProps = { finishTest: (stats: StatsType) => void };
const Tester = ({ finishTest }: TesterProps) => {
	// hooks
	const delay = useDelay();

	// TODO: ASK FOR THE SOURCE OF WORDS
	// states
	const [wordToCopy, setWordToCopy] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt voluptas possimus est facilis eligendi sint veniam et mollitia magni assumenda velit, corrupti quasi ipsa quia. Consectetur aspernatur saepe nisi."
	);
	// Logic states
	const [isTesting, setIsTesting] = useState(true);
	const [isTyping, setIsTyping] = useState(false);
	// data states
	const [correctLetters, setCorrectLetters] = useState("");
	const [errorCount, setErrorCount] = useState(0);
	// data refs
	const correctLettersRef = useRef("");
	const errorCountRef = useRef(0);
	// test input behaviour states
	const [pointer, setPointer] = useState(0);
	const keysToOmit = ["Shift", "CapsLock", "Enter", "Tab", "Control", "AltGraph", "Alt", "Escape", "Backspace"];
	const inputRef = useRef<HTMLInputElement>(null);
	const focusToInput = () => {
		inputRef?.current?.focus();
	};

	/**
	 * checks if the user key pressed is the correct key
	 * according to the pointer position.
	 *
	 * capture all the correct keys pressed and mistakes.
	 */
	const checkLetter = (e: React.KeyboardEvent) => {
		e.preventDefault();
		// prevent adding fake pressed in omitted keys
		if (keysToOmit.includes(e.key)) {
			return;
		}

		if (e.key !== wordToCopy[pointer]) {
			setErrorCount((count) => count + 1);
			errorCountRef.current = errorCountRef.current + 1;
		}

		// compare key pressed with pointer key
		if (e.key === wordToCopy[pointer]) {
			setCorrectLetters((prevLetters) => prevLetters + e.key);
			correctLettersRef.current = correctLettersRef.current + e.key;
			setPointer((prev) => prev + 1);
			return;
		}
	};

	const start = async () => {
		// Remove the input to avoid user interactions after timeout
		await delay(5000);

		console.log("Finished");
		setIsTesting(false);

		// get user stats
		const stats: StatsType = {
			id: "pruebas!",
			errors_letters_count: errorCountRef.current,
			success_letters_count: correctLettersRef.current.length,
		};
		// start finish animation
		await delay(3000);
		// send data to SpeedTest component
		finishTest(stats);
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
				correct words: {correctLetters.length}
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
							{correctLetters}
							<span className={`${style.pointer} ${isTyping && style.isTyping}`}>{wordToCopy[pointer]}</span>
						</div>
						{/* input for test */}
						<input
							type="text"
							ref={inputRef}
							className={`${style.inputText}`}
							autoComplete="false"
							defaultValue={correctLetters}
							onKeyDownCapture={(e) => {
								checkLetter(e);
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
					<h5>Test finalizado gracias por participar!</h5>
				</>
			)}
		</>
	);
};

export default Tester;

// TODO: MAKE SOME TESTS AND TRY TO BREAK THE APP
