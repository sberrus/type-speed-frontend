/**
 * If you are reading this i have to appologize for reading this code. Im not so proud of it but its working.
 * If you have any improvement (that im sure it could) plese let me know or make a pull request in github thanks.
 */

// imports
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
// styles
import style from "./SpeedTest.module.scss";
// types
import { StatsType } from "./SpeedTest";
type WordsType = {
	valid: boolean;
	word: string;
};
type TesterProps = { finishTest: (stats: StatsType) => void };

const Tester = ({ finishTest }: TesterProps) => {
	const [wordSample, setWordSample] = useState(
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci."
	);
	// states
	const [wordToLogic, setWordToCopy] = useState(() => {
		const wordCollection = wordSample.trim().split(" ");
		return wordCollection;
	});
	const [wordsLeft, setWordsLeft] = useState(() => {
		const _wordsLeft = [...wordToLogic];
		_wordsLeft.shift();
		return _wordsLeft;
	});
	//
	const [wordPointer, setWordPointer] = useState(0);
	const [wordToCompare, setWordToCompare] = useState(wordToLogic[wordPointer]);
	//
	const [currentWord, setCurrentWord] = useState<WordsType>({ valid: true, word: "" });
	const [wordsChecked, setWordsChecked] = useState<WordsType[]>([]);
	// refs
	const userInputRef = useRef<HTMLInputElement>(null);
	const focusToInput = () => {
		userInputRef.current?.focus();
	};
	// methods
	const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
		const subString = e.target.value.trim();
		console.log(wordToLogic[0].includes(subString));
		if (wordToLogic[0].includes(subString)) {
			setCurrentWord({ valid: true, word: e.target.value });
			return;
		}
		setCurrentWord({ valid: false, word: e.target.value });
	};

	const checkKeyPressed = (e: KeyboardEvent) => {
		const nextWordActionKey = [" ", "Enter"];

		if (e.key === wordToCompare[0]) {
			setWordToCompare((prev) => {
				const updated = [...prev];
				updated.shift();
				return updated.join("");
			});
		}
		// compare words action
		if (nextWordActionKey.includes(e.key)) {
			if (currentWord?.word.trim() === wordToLogic[0]) {
				addWordToCollection(true);
			} else {
				addWordToCollection(false);
			}
		}
	};

	const addWordToCollection = (valid: boolean) => {
		// add word to collection
		setWordsChecked([...wordsChecked, { valid, word: currentWord.word.trim() || "" }]);
		// reset current word
		setCurrentWord({ valid: true, word: "" });
		// delete word from sample
		setWordToCopy((prev) => {
			const wordCollectionCopy = [...prev];
			wordCollectionCopy.shift();
			return [...wordCollectionCopy];
		});
		setWordsLeft((prev) => {
			const wordsLeftCopy = [...prev];
			wordsLeftCopy.shift();
			return [...wordsLeftCopy];
		});
		setWordToCompare(wordToLogic[1]);
	};

	useEffect(() => {
		userInputRef.current?.focus();
		return () => {};
	}, []);

	return (
		<>
			<div className={style.testWrapper} onClick={focusToInput}>
				{/* results */}
				<div className={style.sectionWrapper}>
					<div className={style.userInputAnswer}>
						<div className={style.userAnswers}>
							{wordsChecked?.map((word, key) => (
								<span key={key} className={`${word.valid ? style.validAnswer : style.wrongAnswer}`}>
									{`${word.word}`}&nbsp;
								</span>
							))}
						</div>
						<div className={style.currentWord}>
							{currentWord.valid ? (
								<span className={style.validWord}>{currentWord.word}</span>
							) : (
								<span className={style.wrongWord}>{currentWord.word}</span>
							)}
						</div>
						<div className={style.inputWrapper}>
							<input
								type="text"
								autoComplete="off"
								value={currentWord.word}
								ref={userInputRef}
								onChange={handleUserInput}
								onKeyDown={checkKeyPressed}
							/>
						</div>
					</div>
				</div>
				{/* next words */}
				<div className={style.sectionWrapper}>
					{wordToCompare}{" "}
					{wordsLeft.map((word, key) => (
						<span key={key}>{word} </span>
					))}
				</div>
			</div>
		</>
	);
};

export default Tester;

// TODO: MAKE SOME TESTS AND TRY TO BREAK THE APP
