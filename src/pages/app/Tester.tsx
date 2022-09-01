// imports
import React, { useEffect, useRef, useState } from "react";
// styles
import style from "./SpeedTest.module.scss";
// types
import { StatsType } from "./SpeedTest";
import useDelay from "hooks/useDelay";
import useAuth from "context/useAuth";
type TesterProps = { finishTest: (stats: StatsType) => void };
type WordsType = {
	valid: boolean;
	word: string;
};

const Tester = ({ finishTest }: TesterProps) => {
	// hooks
	const delay = useDelay();
	const auth = useAuth();
	// words input to use for the test
	const [incomingText, setIncomingText] = useState(
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci."
	);
	// words to display
	const [wordsCollection] = useState<string[]>(() => {
		const replaceRegex = /[,.?]/g;
		const _wordsCollection = incomingText.trim().replaceAll(replaceRegex, "").split(" ");
		return _wordsCollection;
	});

	// current word to compare
	const [currentWordPointer, setCurrentWordPointer] = useState(0);
	const [currentWord, setCurrentWord] = useState([...wordsCollection[currentWordPointer]]);
	const [currentLetterPointer, setCurrentLetterPointer] = useState(0);
	const [letterMemory, setLetterMemory] = useState<string[]>([]);

	// state for current user input
	const [userInput, setUserInput] = useState<WordsType>({ valid: true, word: "" });

	// words checked
	const [wordsChecked, setWordsChecked] = useState<WordsType[]>([]);

	// refs
	const userInputRef = useRef<HTMLInputElement>(null);

	// methods
	const focusToInput = () => {
		userInputRef.current?.focus();
	};

	/**
	 * compare if userInput === currentWord[0]
	 * if true set userInput style tu valid
	 * if false set userInput style tu wrong
	 */
	const checkWord = (e: React.ChangeEvent<HTMLInputElement>) => {
		const _userInput = e.target.value.trim();
		const _currentWord = wordsCollection[currentWordPointer];

		if (_currentWord.includes(_userInput)) {
			setUserInput({ valid: true, word: _userInput });
		} else {
			setUserInput({ valid: false, word: _userInput });
		}
	};
	/**
	 * compare if the key pressed by the user is the same as the first letter of currentWord
	 * if true => save that letter in memory and shift it from current word -> userInput style still correct.
	 * if false => change userInput word displayed to wrong style.
	 */

	const checkKey = (e: React.KeyboardEvent) => {
		const keyPressed = e.key;
		const actionKeys = [" ", "Enter"];

		// check if action key
		if (actionKeys.includes(keyPressed)) {
			if (userInput.word === wordsCollection[currentWordPointer]) {
				setWordsChecked([...wordsChecked, userInput]);
			} else {
				setWordsChecked([...wordsChecked, { ...userInput, valid: false }]);
			}
			setUserInput({ valid: true, word: "" });
			const _wordPointer = currentWordPointer + 1;
			setCurrentWordPointer(_wordPointer);
			setCurrentWord([...wordsCollection[_wordPointer]]);
			setCurrentLetterPointer(0);
			setLetterMemory([]);
		}

		// check if current letter
		if (keyPressed === "Backspace" && currentLetterPointer > 0 && userInput.valid) {
			setLetterMemory((letterColection) => {
				const updated = letterColection.shift();
				return updated ? [...updated] : [];
			});
			setCurrentLetterPointer((prev) => prev - 1);
		}
		// check if key pressed is same as currentLetterPointer
		if (keyPressed === currentWord[currentLetterPointer] && userInput.valid) {
			setLetterMemory([...letterMemory, keyPressed]);
			setCurrentLetterPointer((prev) => prev + 1);
		}
	};

	const start = async () => {
		const TESTING_TIME = 50000; //Cambiar a 60000 cuando vaya a producción
		// test time
		await delay(TESTING_TIME);
		// Remove the input to avoid user interactions after timeout

		// get user stats to send to backend
		/**
		 * palabras por minuto
		 * letras por minuto
		 * precision
		 */
		const words_per_minute = wordsChecked.filter((words) => words.valid === true).length;
		console.log(words_per_minute);
		const stats: StatsType = {
			id: auth?.session?.user.username || "ERROR",
			words_per_minute,
			valid_words: wordsChecked.filter((words) => words.valid).length,
			wrong_words: wordsChecked.filter((words) => !words.valid).length,
		};
		// send data to SpeedTest component
		finishTest(stats);
	};
	useEffect(() => {
		start();
		userInputRef.current?.focus();
		return () => {};
	}, []);

	return (
		<>
			<div className={style.testWrapper} onClick={focusToInput}>
				<div className={style.sectionWrapper}>
					<div className={style.userInputAnswer}>
						<div className={style.userAnswers}>
							{/* words checked collection */}
							{wordsChecked.map((word, key) => (
								<span key={key} className={word.valid ? style.validAnswer : style.wrongAnswer}>
									{word.word}&#160;
								</span>
							))}
						</div>

						<div className={style.currentWord}>
							{/*  user input */}
							<span className={userInput.valid ? style.validWord : style.wrongWord}>{userInput.word}</span>
						</div>

						<div className={style.inputWrapper}>
							<input
								type="text"
								autoComplete="off"
								value={userInput.word}
								onChange={checkWord}
								onKeyDown={checkKey}
								ref={userInputRef}
							/>
						</div>
					</div>
				</div>
				{/* next words */}
				<div className={style.sectionWrapper}>
					{/* word to compare */}
					{currentWord.slice(currentLetterPointer, currentWord.length)}
					{/* upcoming words */}{" "}
					{wordsCollection
						.slice(1, wordsCollection.length)
						.slice(currentWordPointer, wordsCollection.length)
						.map((word, key) => (
							<span key={key}>{word} </span>
						))}
				</div>
			</div>
		</>
	);
};

export default Tester;

// TODO: MAKE SOME TESTS AND TRY TO BREAK THE APP