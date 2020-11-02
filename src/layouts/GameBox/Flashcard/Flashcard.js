import React, {useState} from 'react';
import "./_flashcard.scss"


const Flashcard = ({goBack}) => {

    const [turn, setTurn] = useState("");
    const turnStyle = {}
    turnStyle.transform = turn;


    const handleTurnY = () => {
        setTurn("rotateY(180deg)");
    }
    const handleTurnYBack = () => {
        setTurn("rotateY(0)");
    }


    const [currQuestion, setCurrQuestion] = useState(questions[0]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [flashStyle, setFlashStyle] = useState("no_flash")

    const printQuestion = (arr) => {
        handleTurnYBack();
        setFlashStyle("flash")
        setTimeout(() => {
            setQuestionNumber(Math.floor(Math.random() * (arr.length)));
            setCurrQuestion(arr[questionNumber]);
            setFlashStyle("no_flash")
        }, 400)
    }
    const handleTurnPrint = () => {
        handleTurnYBack();
        setTimeout(() => {
            printQuestion(questions);
        }, 100)
    }


    const [settings, setSettings] = useState("settings")
    const handleSettings = ()=>{
        setSettings("settings_flash")
        setTimeout(() => {
            setSettings("settings")
            goBack();
        }, 500)
    }





    return (
        <div className="to_overflow">
            <div className={settings}/>
            <div style={turnStyle} className="flashcard_container">
                <div className="question_box">
                    <div className="flashcard_header">
                        <i onClick={handleSettings} className="fas fa-cog flashcard_settings"/>
                        <div className="question_number">Pytanie nr: {questionNumber + 1}</div>
                    </div>
                    <div className="question_content">{currQuestion.questionContent}</div>
                    <div className="question_code">{currQuestion.questionCode}</div>
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
                        <div className="question_number">Pytanie nr: {questionNumber + 1}</div>
                    </div>
                    <div className="answer_content">{currQuestion.answerContent}</div>
                    <div className="answer_code">{currQuestion.answerCode}</div>
                    <div className="button_box">
                        <button onClick={handleTurnPrint} className="next_question2">Następne pytanie</button>
                        <button onClick={handleTurnYBack} className="turn_back">Wróć do pytania</button>
                    </div>
                    <div className="tag_list">{currQuestion.tags.join(", ")}</div>
                </div>
            </div>
        </div>

    )
}


const questions = [
    {
        questionContent: `testowa treść pytania`,
        questionCode: `testowy kod pytania`,
        answerContent: `testowa treść odpowiedzi`,
        answerCode: `testowy kod odpowiedzi`,
        tags: ["testTag1", "testTag2"]
    },
    {
        questionContent: `Za co odpowiadają argumenty modułu react-dom?`,
        questionCode: `ReactDOM.render(argument1, argument2)`,
        answerContent: `Argument1 (element) to dowolna przyjmowana przez React rzecz do wyrenderowania,
            Argument2 (miejsce) to element DOM do którego będziemy renderować element.`,
        answerCode: `ReactDOM.render(
                    <h1>Hello, world!</h1>,
                    document.getElementById("app")
                    );`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `W jaki sposób możemy skorzystać z funkcji biblioteki React w pliku JavaScript? `,
        questionCode: ``,
        answerContent: `Należy go zaimportować moduł react jako React:`,
        answerCode: `import React from "react";`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `Gdzie i jak importujemy moduł react-dom?`,
        questionCode: ``,
        answerContent: `Moduł react-dom importujemy jednorazowo, tylko w głównym pliku aplikacji,
        wpisując następujący kod:`,
        answerCode: `import ReactDOM from "react-dom";`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `Czym jest JSX?`,
        questionCode: ``,
        answerContent: `JSX jest rozszerzeniem języka JavaScript pozwalającym używać tagów przypominających tagi
                        HTML wewnątrz plików JavaScriptowych.`,
        answerCode: ``,
        tags: ["JS", "React"]
    },
    {
        questionContent: `Czy w składni JSX dopuszczalne jest nie wpisanie cudzysłowiu dla wartości atrybutu?`,
        questionCode: `<table border=0>`,
        answerContent: `W składi JSX nie jest dopuszczalne nie wpisanie cudzysłowiu dla wartości atrybutu`,
        answerCode: `<table border="0">`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `Czy w składni JSX wszystkie tagi muszą być zamknięte?`,
        questionCode: `<img src="logo.png">`,
        answerContent: `W składi JSX wszystkie tagi musza być zamknięte. Dopuszcza się zamknięcie
                        znakiem / na końcu elementu.`,
        answerCode: `<img src="logo.png"></img>
                    <img src="logo.png" />`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `W co są zmieniane tagi JSX podczas kompilacji?`,
        questionCode: `<span id="test">Hello, World</span>`,
        answerContent: `Tagi JSX podczas kompilacji są zamieniane w wywołania React.createElement().
                        Wywołania te zwracają obiekt reprezentujący element.`,
        answerCode: `React.createElement(
                      "span",
                      {id: "test"},
                      "Hello, World"
                    );`,
        tags: ["JS", "React"]
    },
    {
        questionContent: `W jaki sposób JSX umożliwia zagnieżdżanie wyrażeń?`,
        questionCode: ``,
        answerContent: `Aby umieścić wyrażenie w dowolnym miejscu elementu JSX należy otoczyć je nawiasami klamrowymi`,
        answerCode: `<span>{2+2}</span>
                    <span>Twoje imię ma {count} znaków</span>
                    <span>{ person.name}</span>
                    <span>{ print(name)}</span>`,
        tags: ["JS", "React"]
    },
]

export default Flashcard;


// return (
//     <div className="flashcard_container">
//
//         <div className="flashcard_box">
//
//             <div style={turnStyle} className="flipping_card">
//                 <div className="question_box">
//                     <div className="question_number">Pytanie nr: {questionNumber + 1}</div>
//                     <div className="question_content">{currQuestion.questionContent}</div>
//                     <div className="question_code">{currQuestion.questionCode}</div>
//                     <div className="button_box">
//                         <button onClick={() => printQuestion(questions)} className="next_question1 btn">Następne
//                             pytanie
//                         </button>
//                         <button onClick={handleTurnY} className="show_answer btn">Pokaż odpowiedź</button>
//                     </div>
//                     <div className="tag_list">{currQuestion.tags.join(", ")}</div>
//                 </div>
//
//                 <div className="answer_box">
//                     <div className="question_number">Pytanie nr: {questionNumber + 1}</div>
//                     <div className="answer_content">{currQuestion.answerContent}</div>
//                     <div className="answer_code">{currQuestion.answerCode}</div>
//                     <div className="button_box">
//                         <button onClick={printQuestion} className="next_question2 btn">Następne pytanie</button>
//                         <button onClick={handleTurnYBack} className="turn_back btn">Wróć do pytania</button>
//                     </div>
//                     <div className="tag_list">{currQuestion.tags.join(", ")}</div>
//                 </div>
//             </div>
//         </div>
//
//     </div>
// )