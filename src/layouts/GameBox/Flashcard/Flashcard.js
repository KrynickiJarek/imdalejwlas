import React, {useState, useEffect} from 'react';
import "./_flashcard.scss"
// import CodeSyntaxHigh from "./CodeSyntaxHighlighter/CodeSyntaxHighlighter"; ///usuń te pliki przy porządkach

import SyntaxHighlighter from 'react-syntax-highlighter';
import {anOldHope} from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Flashcard = ({goBack}) => {

    const [questions, setQuestions] = useState([]);
    const [difficultyArray, setDifficultyArray] = useState([])
    const [currQuestion, setCurrQuestion] = useState(startQuestion[0]);
    const [prevQuestionNumber, setPrevQuestionNumber] = useState(0);

    const [flashStyle, setFlashStyle] = useState("no_flash")
    const [settings, setSettings] = useState("settings")
    const [turn, setTurn] = useState("");
    const turnStyle = {}
    turnStyle.transform = turn;

    useEffect(() => {
        const fetchQuestions = () => {
            fetch("http://localhost:3000/questions")
                .then((r) => r.json())
                .then((data) => {
                    setQuestions(data);
                    setDifficultyArray([]);
                    data.forEach(el => {
                        for (let i = 0; i < el.difficulty; i++) {
                            setDifficultyArray(prev => [...prev, el.id])
                        }
                        console.log("POBRANO Z SERWERA", difficultyArray);
                    });
                })
                .catch((err) => console.log(err));
        };
        fetchQuestions();
    }, []);

    useEffect(() => {
        if (questions.length !== 0 || difficultyArray.length !== 0) {
            let randomQuestionNumber = difficultyArray[Math.floor(Math.random() * (difficultyArray.length))];
            setCurrQuestion(questions[randomQuestionNumber])
            setPrevQuestionNumber(randomQuestionNumber);
        }
    }, []);

    const fetchQuestions = () => {
        fetch("http://localhost:3000/questions")
            .then((r) => r.json())
            .then((data) => {
                setQuestions(data);
                setDifficultyArray([]);
                data.forEach(el => {
                    for (let i = 0; i < el.difficulty; i++) {
                        setDifficultyArray(prev => [...prev, el.id])
                    }
                    console.log("POBRANO Z SERWERA", difficultyArray);
                });
            })
            .catch((err) => console.log(err));
    };

    const handleTurnY = () => {
        setTurn("rotateY(180deg)");
    }

    const handleTurnYBack = () => {
        setTurn("rotateY(0)");
    }

    const handleTurnPrint = () => {
        handleTurnYBack();
        setTimeout(() => {
            printQuestion(questions);
        }, 100)
    }

    const handleSettings = () => {
        setSettings("settings_flash")
        setTimeout(() => {
            setSettings("settings")
            goBack();
        }, 500)
    }


    const printQuestion = (arr) => {
        setDifficultyArray([]);
        fetchQuestions();
        handleTurnYBack();
        setFlashStyle("flash")
        let randomQuestionNumber = difficultyArray[Math.floor(Math.random() * (difficultyArray.length))];
        do {
            randomQuestionNumber = difficultyArray[Math.floor(Math.random() * (difficultyArray.length))];
        } while (randomQuestionNumber === prevQuestionNumber);
        setTimeout(() => {
            setCurrQuestion(arr[randomQuestionNumber]);
            setPrevQuestionNumber(randomQuestionNumber);
            setFlashStyle("no_flash")
            window.scrollTo(0, document.body.scrollHeight);
            console.log(difficultyArray);
            console.log(randomQuestionNumber);
        }, 400)
    }

    const setQuestionDifficulty = (dataCurrQuestion, dataCurrQuestionID) => {
        fetch(`http://localhost:3000/questions/${dataCurrQuestionID}`, {
            method: "PUT",
            body: JSON.stringify(dataCurrQuestion),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    }


    const handleDifficulty = (e) => {
        printQuestion(questions);
        let dataCurrQuestion = {
            difficulty: +e.target.value,
            questionContent: currQuestion.questionContent,
            questionCode: currQuestion.questionCode,
            answerContent: currQuestion.answerContent,
            answerCode: currQuestion.answerCode,
            tags: currQuestion.tags
        }
        setQuestionDifficulty(dataCurrQuestion, currQuestion.id);

        setDifficultyArray(prev => prev.filter((el) => el !== currQuestion.id));
        for (let i = 0; i < +e.target.value; i++) {
            setDifficultyArray(prev => [...prev, currQuestion.id])
        }
        setDifficultyArray(prev => prev.sort((a, b) => a - b));
    }


    // if (questions.length === 0 || difficultyArray.length === 0) {
    //     return (
    //         <div className="to_overflow">
    //             <div className={settings}/>
    //             <div style={turnStyle} className="flashcard_container">
    //                 <div className="question_box">
    //                     <div className="flashcard_header">
    //                         <i onClick={handleSettings} className="fas fa-cog flashcard_settings"/>
    //                         <div className="question_number"/>
    //                     </div>
    //                     <div className="question_content">Baza pytań nie została jeszcze wczytana...</div>
    //                 </div>
    //
    //                 <div className="answer_box">
    //                     <div className="flashcard_header">
    //                         <i onClick={handleSettings} className="fas fa-cog flashcard_settings"/>
    //                         <div className="question_number"/>
    //                     </div>
    //                     <div className="answer_content">Baza pytań nie została jeszcze wczytana...</div>
    //                 </div>
    //             </div>
    //         </div>
    //
    //     )
    // } else {
    return (
        <div className="to_overflow">
            <div className={settings}/>
            <div style={turnStyle} className="flashcard_container">
                <div className="question_box">
                    <div className="flashcard_header">
                        <i onClick={handleSettings} className="fas fa-cog flashcard_settings"/>
                        <div className="question_number">Pytanie nr: {currQuestion.id}</div>
                    </div>
                    <div className="question_content">{currQuestion.questionContent}</div>
                    {currQuestion.questionCode === "" ? null :
                        <div className="codeContainer">
                            <SyntaxHighlighter language="javascript" style={anOldHope}>
                                {currQuestion.questionCode}
                            </SyntaxHighlighter>
                        </div>}
                    <div className="button_box">
                        <button onClick={() => printQuestion(questions)} className="next_question1">Następne
                            pytanie
                            <div className={flashStyle}/>
                        </button>
                        <button onClick={handleTurnY} className="show_answer">Pokaż odpowiedź</button>
                    </div>
                    <div className="tag_list">Tagi: {currQuestion.tags.join(", ")}</div>
                </div>

                <div className="answer_box">
                    <div className="flashcard_header">
                        <i onClick={handleSettings} className="fas fa-cog flashcard_settings"/>
                        <div className="question_number">Pytanie nr: {currQuestion.id}</div>
                    </div>
                    <div className="answer_content">{currQuestion.answerContent}</div>
                    {currQuestion.answerCode === "" ? null :
                        <div className="codeContainer">
                            <SyntaxHighlighter language="javascript" style={anOldHope}>
                                {currQuestion.answerCode}
                            </SyntaxHighlighter>
                        </div>}
                    <div className="button_box">
                        <button onClick={handleTurnPrint} className="next_question2">Następne pytanie</button>
                        <button onClick={handleTurnYBack} className="turn_back">Wróć do pytania</button>
                    </div>
                    <div className="scale_box">
                        <p> jak trudne było to pytanie?</p>
                        <button onClick={handleDifficulty} value={0} className="emojiClass">&#128514;</button>
                        <button onClick={handleDifficulty} value={1} className="emojiClass">&#128527;</button>
                        <button onClick={handleDifficulty} value={2} className="emojiClass">&#128528;</button>
                        <button onClick={handleDifficulty} value={3} className="emojiClass">&#128529;</button>
                        <button onClick={handleDifficulty} value={4} className="emojiClass">&#128530;</button>
                        <button onClick={handleDifficulty} value={5} className="emojiClass">&#128544;</button>
                    </div>
                    <div className="tag_list">Tagi: {currQuestion.tags.join(", ")}</div>
                </div>
            </div>
        </div>

    )
    // }
}

const startQuestion = [
    {
        id: 0,
        difficulty: 1,
        questionContent: `testowa treść pytania`,
        questionCode: `testowy kod pytania`,
        answerContent: `testowa treść odpowiedzi`,
        answerCode: `testowy kod odpowiedzi`,
        tags: ["testTag1", "testTag2"],
    }
]


export default Flashcard;
