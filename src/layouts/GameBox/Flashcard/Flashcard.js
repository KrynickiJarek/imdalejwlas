import React, {useState, useEffect} from 'react';
import "./_flashcard.scss"
// import CodeSyntaxHigh from "./CodeSyntaxHighlighter/CodeSyntaxHighlighter"; ///usuń te pliki przy porządkach

import SyntaxHighlighter from 'react-syntax-highlighter';
import {anOldHope} from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Flashcard = ({goBack}) => {

    const [questions, setQuestions] = useState([]);
    const fetchQuestions = () => {
        fetch("http://localhost:3000/questions")
            .then((r) => r.json())
            .then((data) => {
                setQuestions(data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        fetchQuestions();
    }, []);


    const [turn, setTurn] = useState("");
    const turnStyle = {}
    turnStyle.transform = turn;


    const handleTurnY = () => {
        setTurn("rotateY(180deg)");
    }
    const handleTurnYBack = () => {
        setTurn("rotateY(0)");
    }


    const [currQuestion, setCurrQuestion] = useState(startQuestion[0]);
    useEffect(() => {
        if (questions.length !== 0) {
            setCurrQuestion(questions[Math.floor(Math.random() * (questions.length))])
        }
    }, [questions]);



    const [questionNumber, setQuestionNumber] = useState(0);
    const [flashStyle, setFlashStyle] = useState("no_flash")

    const printQuestion = (arr) => {
        handleTurnYBack();
        setFlashStyle("flash")
        let randomQuestionNumber = Math.floor(Math.random() * (arr.length));
        do {
            randomQuestionNumber = Math.floor(Math.random() * (arr.length));
            setQuestionNumber(randomQuestionNumber);
        } while ((arr[randomQuestionNumber].id) === (arr[questionNumber].id));
        setTimeout(() => {
            setCurrQuestion(arr[questionNumber]);
            setFlashStyle("no_flash")
            window.scrollTo(0, document.body.scrollHeight)
        }, 400)
    }
    const handleTurnPrint = () => {
        handleTurnYBack();
        setTimeout(() => {
            printQuestion(questions);
        }, 100)
    }


    const [settings, setSettings] = useState("settings")
    const handleSettings = () => {
        setSettings("settings_flash")
        setTimeout(() => {
            setSettings("settings")
            goBack();
        }, 500)
    }

    if (questions.length === 0) {
        return (
            <div className="to_overflow">
                <div className={settings}/>
                <div style={turnStyle} className="flashcard_container">
                    <div className="question_box">
                        <div className="flashcard_header">
                            <i onClick={handleSettings} className="fas fa-cog flashcard_settings"/>
                            <div className="question_number"/>
                        </div>
                        <div className="question_content">Baza pytań nie została jeszcze wczytana...</div>
                    </div>

                    <div className="answer_box">
                        <div className="flashcard_header">
                            <i onClick={handleSettings} className="fas fa-cog flashcard_settings"/>
                            <div className="question_number"/>
                        </div>
                        <div className="answer_content">Baza pytań nie została jeszcze wczytana...</div>
                    </div>
                </div>
            </div>

        )
    } else {
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
                            <SyntaxHighlighter language="javascript" style={anOldHope}>
                                {currQuestion.questionCode}
                            </SyntaxHighlighter>}
                        <div className="button_box">
                            <button onClick={() => printQuestion(questions)} className="next_question1">Następne pytanie
                                <div className={flashStyle}/>
                            </button>
                            <button onClick={handleTurnY} className="show_answer">Pokaż odpowiedź</button>
                        </div>
                        <div className="tag_list">{currQuestion.tags.join(", ")}</div>
                    </div>

                    <div className="answer_box">
                        <div className="flashcard_header">
                            <i onClick={handleSettings} className="fas fa-cog flashcard_settings"/>
                            <div className="question_number">Pytanie nr: {currQuestion.id}</div>
                        </div>
                        <div className="answer_content">{currQuestion.answerContent}</div>
                        {currQuestion.answerCode === "" ? null :
                            <SyntaxHighlighter language="javascript" style={anOldHope}>
                                {currQuestion.answerCode}
                            </SyntaxHighlighter>}
                        <div className="button_box">
                            <button onClick={handleTurnPrint} className="next_question2">Następne pytanie</button>
                            <button onClick={handleTurnYBack} className="turn_back">Wróć do pytania</button>
                        </div>
                        <div className="scale_box">
                            <p> jak trudne było to pytanie?</p>
                            <button onClick={handleTurnPrint} className="emojiClass">&#128514;</button>
                            <button onClick={handleTurnPrint} className="emojiClass">&#128527;</button>
                            <button onClick={handleTurnPrint} className="emojiClass">&#128528;</button>
                            <button onClick={handleTurnPrint} className="emojiClass">&#128529;</button>
                            <button onClick={handleTurnPrint} className="emojiClass">&#128530;</button>
                            <button onClick={handleTurnPrint} className="emojiClass">&#128544;</button>
                        </div>
                        <div className="tag_list">{currQuestion.tags.join(", ")}</div>
                    </div>
                </div>
            </div>

        )
    }
}



const startQuestion = [
    {
        questionContent: `testowa treść pytania`,
        questionCode: `testowy kod pytania`,
        answerContent: `testowa treść odpowiedzi`,
        answerCode: `testowy kod odpowiedzi`,
        tags: ["testTag1", "testTag2"],
    }
]





// const questions = [
//     {
//         questionContent: `testowa treść pytania`,
//         questionCode: `testowy kod pytania`,
//         answerContent: `testowa treść odpowiedzi`,
//         answerCode: `testowy kod odpowiedzi`,
//         tags: ["testTag1", "testTag2"],
//         number: 1
//     },
//     {
//         questionContent: `Za co odpowiadają argumenty modułu react-dom?`,
//         questionCode: `ReactDOM.render(argument1, argument2)`,
//         answerContent: `Argument1 (element) to dowolna przyjmowana przez React rzecz do wyrenderowania,
//             Argument2 (miejsce) to element DOM do którego będziemy renderować element.`,
//         answerCode: `ReactDOM.render(
//                     <h1>Hello, world!</h1>,
//                     document.getElementById("app")
//                     );`,
//         tags: ["JS", "React"],
//         number: 2
//     },
//     {
//         questionContent: `W jaki sposób możemy skorzystać z funkcji biblioteki React w pliku JavaScript? `,
//         questionCode: ``,
//         answerContent: `Należy zaimportować moduł react jako React:`,
//         answerCode: `import React from "react";`,
//         tags: ["JS", "React"],
//         number: 3
//     },
//     {
//         questionContent: `Gdzie i jak importujemy moduł react-dom?`,
//         questionCode: ``,
//         answerContent: `Moduł react-dom importujemy jednorazowo, tylko w głównym pliku aplikacji,
//         wpisując następujący kod:`,
//         answerCode: `import ReactDOM from "react-dom";`,
//         tags: ["JS", "React"],
//         number: 4
//     },
//     {
//         questionContent: `Czym jest JSX?`,
//         questionCode: ``,
//         answerContent: `JSX jest rozszerzeniem języka JavaScript pozwalającym używać tagów przypominających tagi
//                         HTML wewnątrz plików JavaScriptowych.`,
//         answerCode: ``,
//         tags: ["JS", "React"],
//         number: 5
//     },
//     {
//         questionContent: `Czy w składni JSX dopuszczalne jest nie wpisanie cudzysłowiu dla wartości atrybutu?`,
//         questionCode: `<table border=0>`,
//         answerContent: `W składi JSX nie jest dopuszczalne nie wpisanie cudzysłowiu dla wartości atrybutu`,
//         answerCode: `<table border="0">`,
//         tags: ["JS", "React"],
//         number: 6
//     },
//     {
//         questionContent: `Czy w składni JSX wszystkie tagi muszą być zamknięte?`,
//         questionCode: `<img src="logo.png">`,
//         answerContent: `W składi JSX wszystkie tagi musza być zamknięte. Dopuszcza się zamknięcie
//                         znakiem / na końcu elementu.`,
//         answerCode: `<img src="logo.png"></img>
//                     <img src="logo.png" />`,
//         tags: ["JS", "React"],
//         number: 7
//     },
//     {
//         questionContent: `W co są zmieniane tagi JSX podczas kompilacji?`,
//         questionCode: `<span id="test">Hello, World</span>`,
//         answerContent: `Tagi JSX podczas kompilacji są zamieniane w wywołania React.createElement().
//                         Wywołania te zwracają obiekt reprezentujący element.`,
//         answerCode: `React.createElement(
//                       "span",
//                       {id: "test"},
//                       "Hello, World"
//                     );`,
//         tags: ["JS", "React"],
//         number: 8
//     },
//     {
//         questionContent: `W jaki sposób JSX umożliwia zagnieżdżanie wyrażeń?`,
//         questionCode: ``,
//         answerContent: `Aby umieścić wyrażenie w dowolnym miejscu elementu JSX należy otoczyć je nawiasami klamrowymi`,
//         answerCode: `<span>{2+2}</span>
// <span>Twoje imię ma {count} znaków</span>
// <span>{ person.name}</span>
// <span>{ print(name)}</span>`,
//         tags: ["JS", "React"],
//         number: 9
//     },
// ]
export default Flashcard;
