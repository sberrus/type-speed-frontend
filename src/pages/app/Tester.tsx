// imports
import React, { useEffect, useRef, useState } from "react";
// hooks
import useDelay from "hooks/useDelay";
// context
import useTest from "context/useTest";
// styles
import style from "./SpeedTest.module.scss";
// types
import { TextDecoratorPrimary, TextDecoratorSecondary } from "@components/Decorators/CustomText";
import { Container } from "react-bootstrap";
import { WordsType } from "types/test";

const Tester = () => {
	// hooks
	const delay = useDelay();
	const test = useTest();

	// STATES
	// logic state
	const [isTesting, setIsTesting] = useState(true);

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
	const wordsCheckedRef = useRef<WordsType[]>([]);

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
				const payload = [...wordsChecked, userInput];
				setWordsChecked(payload);
				wordsCheckedRef.current = payload;
			} else {
				const payload = [...wordsChecked, { ...userInput, valid: false }];
				setWordsChecked(payload);
				wordsCheckedRef.current = payload;
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

	const initTest = async () => {
		const TESTING_TIME = 60000;
		// test time
		await delay(TESTING_TIME);
		// Remove the input to avoid user interactions after timeout
		setIsTesting(false);
		// save user score
		test?.saveTest(wordsCheckedRef.current);
		await delay(5000);
	};
	useEffect(() => {
		initTest();
		userInputRef.current?.focus();
		return () => {};
	}, []);

	return (
		<div className={style.tester}>
			<Container>
				{/* Stats */}
				<div className={style.statsContainer}>
					<div className={style.PCSection}>
						<h5>
							<TextDecoratorSecondary>Palabras/min</TextDecoratorSecondary>
						</h5>
						<hr />
						<span className={style.stat}>{wordsChecked.filter((word) => word.valid).length}</span>
					</div>
					<div className={style.PPMSection}>
						<h5>
							<TextDecoratorSecondary>Letras/min</TextDecoratorSecondary>
						</h5>
						<hr />
						<span className={style.stat}>
							{
								wordsChecked
									.filter((word) => word.valid)
									.map((word) => word.word)
									.join("").length
							}
						</span>
					</div>
					<div className={style.PESection}>
						<h5>
							<TextDecoratorSecondary>Precisión%</TextDecoratorSecondary>
						</h5>
						<hr />
						<span className={style.stat}>
							{wordsChecked.length > 0
								? Number(
										((wordsChecked.filter((word) => word.valid).length / wordsChecked.length) * 100).toFixed()
								  )
								: 0}
							%
						</span>
					</div>
				</div>

				{/* Test Wrapper */}
				{isTesting ? (
					<div className={style.testWrapper} onClick={focusToInput}>
						<div className={style.sectionWrapper}>
							<div className={style.userInputAnswer}>
								<div className={style.userAnswers}>
									{/* words checked collection */}
									{wordsChecked.map((word, key) => (
										<span key={key}>
											<span className={word.valid ? style.validAnswer : style.wrongAnswer}>{word.word}</span>{" "}
											&#160;
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
				) : (
					<div className={style.finishMessage}>
						<h2 className="text-center w-100">
							<TextDecoratorPrimary>Test finalizado gracias por participar!</TextDecoratorPrimary>
						</h2>
					</div>
				)}
			</Container>
		</div>
	);
};

export default Tester;

// TODO: MAKE SOME TESTS AND TRY TO BREAK THE APP
