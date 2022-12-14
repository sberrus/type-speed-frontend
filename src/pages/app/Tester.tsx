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
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

const Tester = () => {
	// hooks
	const delay = useDelay();
	const test = useTest();
	const navigate = useNavigate();

	// STATES
	// logic state
	const [isTesting, setIsTesting] = useState(true);

	// words input to use for the test
	const [incomingText, setIncomingText] = useState(
		"Estimado restaurante, Te confirmamos que ya hemos realizado los cambios que nos solicitaste, en caso de que necesites realizar algún otro tipo de cambio por favor indícanos a detalle que seria para poder realizar lo más rápido posible. En el caso de que quieras ver los cambios a través de un navegador web introduce la dirección de tu restaurante y luego búscalo a través del nombre. Si no ves reflejado los cambios, necesitamos que refresques la página (pulsando las teclas 'Ctrl' y 'F5' a la vez) o borres las cookies del navegador, aquí te indicamos cómo hacerlo en el navegador Chrome. Si quieres visualizar los cambios a través de la máquina OrderPad, al final del turno de comidas o cenas, cuando el restaurante esté cerrado, apaga y enciende de nuevo la OrderPad para poder visualizarlos. En el caso de que haya algún error o no veas los cambios reflejados en 24 horas, avísanos para poder ofrecerte una solución. Muchas gracias, Un saludo."
	);
	// words to display
	const [wordsCollection] = useState<string[]>(() => {
		const _wordsCollection = incomingText.trim().split(" ");
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
		// test time
		const TESTING_TIME = 60000;
		await delay(TESTING_TIME);

		// Remove the input to avoid user interactions after timeout
		setIsTesting(false);

		// save user score
		test?.saveTest(wordsCheckedRef.current);
		navigate("/app/stats");
	};

	useEffect(() => {
		if (isMobile) {
			navigate("/");
		}
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
							{test?.isSending ? (
								<>
									<TextDecoratorPrimary>Guardando estadisticas...</TextDecoratorPrimary>
									<small>No cierre esta ventana</small>
								</>
							) : (
								<TextDecoratorPrimary>Test finalizado gracias por participar!</TextDecoratorPrimary>
							)}
						</h2>
					</div>
				)}
			</Container>
		</div>
	);
};

export default Tester;

// TODO: MAKE SOME TESTS AND TRY TO BREAK THE APP
