import React, { useRef, useState } from "react";
import style from "./SpeedTest.module.scss";

const Tester = () => {
	const [wordToCopy, setWordToCopy] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt voluptas possimus est facilis eligendi sint veniam et mollitia magni assumenda velit, corrupti quasi ipsa quia. Consectetur aspernatur saepe nisi."
	);
	const [pointer, setPointer] = useState(0);
	const [correctWords, setCorrectWords] = useState("");
	const [isTyping, setIsTyping] = useState(false);

	// input Ref
	const inputRef = useRef<HTMLInputElement>(null);

	const focusToInput = () => {
		// TODO: solucionar este error de lintern
		inputRef?.current?.focus();
	};

	const checkWord = (e: React.KeyboardEvent) => {
		e.preventDefault();

		// to prevent this keys for Uppercases
		if (e.key === "Shift" || e.key === "CapsLock") {
			return;
		}

		// compare key pressed with pointer key
		if (e.key === wordToCopy[pointer]) {
			setCorrectWords((prev) => prev + e.key);
			setPointer((prev) => prev + 1);
		}
	};

	//
	return (
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
	);
};

export default Tester;
