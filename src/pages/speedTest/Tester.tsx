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
	// states
	const [wordToCopy, setWordToCopy] = useState(() => {
		const word =
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est doloremque odio deleniti quasi itaque repellendus ipsam ad. Laboriosam adipisci alias deleniti? Blanditiis sequi in nobis incidunt error recusandae adipisci.";
		const wordSliced = word.trim().split(" ");
		return wordSliced;
	});
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
		console.log(wordToCopy[0].includes(subString));
		if (wordToCopy[0].includes(subString)) {
			setCurrentWord({ valid: true, word: e.target.value });
			return;
		}
		setCurrentWord({ valid: false, word: e.target.value });
	};

	const checkKeyPressed = (e: KeyboardEvent) => {
		const nextWordActionKey = [" ", "Enter"];

		// compare words action
		if (nextWordActionKey.includes(e.key)) {
			if (currentWord?.word.trim() === wordToCopy[0]) {
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
					{wordToCopy.map((word, key) => (
						<span key={key}>{word} </span>
					))}
				</div>
			</div>
		</>
	);
};

export default Tester;

// TODO: MAKE SOME TESTS AND TRY TO BREAK THE APP
