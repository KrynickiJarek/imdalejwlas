import React, {useState} from 'react';
import Flashcard from "./Flashcard/Flashcard";
import NewQuestionAdd from "./NewQuestionAdd/NewQuestionAdd";
import LandingPage from "./LandingPage/LandingPage";
import Info from "./Info/Info";


import "./_gamebox.scss"


const GameBox = () => {

    const [opacity, setOpacity] = useState(1);
    const opacityStyle = {}
    opacityStyle.opacity = opacity;

    const [turn, setTurn] = useState("");
    const turnStyle = {}
    turnStyle.transform = turn;

    const [hide, setHide] = useState("flex");
    const hideStyle = {};
    hideStyle.display = hide;

    const [hideImmediately, setHideImmediately] = useState("flex");
    const hideImmediatelyStyle = {};
    hideImmediatelyStyle.display = hideImmediately;

    const [show, setShow] = useState("none");
    const showStyle = {};
    showStyle.display = show;


    const [showHideLandingPage, setShowHideLandingPage] = useState("flex");
    const landingPageStyle = {};
    landingPageStyle.display = showHideLandingPage;


    const [showHideAddNewQuestion, setShowHideAddNewQuestion] = useState("none");
    const addNewQuestionStyle = {};
    addNewQuestionStyle.display = showHideAddNewQuestion;


    const [showHideInfo, setShowHideInfo] = useState("none");
    const infoStyle = {};
    infoStyle.display = showHideInfo;


    const [transitionClass, setTransitionClass] = useState("startBox_green");


    window.onscroll = () => {
        const opacityCalc = (4.5 - 5 * ((window.scrollY + window.innerHeight) / document.body.scrollHeight)).toFixed(1)
        setOpacity(opacityCalc > 1 ? 1 : opacityCalc < 0 ? 0 : opacityCalc);
        // console.log(opacityCalc);

        const screenPosition = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
        setTurn(screenPosition >= 0.95 ? "rotateX(180deg)" : "");
    }

    const handleStart = () => {
        setTransitionClass("startBox_white");
        setHideImmediately("none");
        setTimeout(() => {
            setHide("none");
            setShow("flex");
        }, 300)
    }

    const handleAddNewQuestion = () => {
        setShowHideLandingPage("none")
        setShowHideAddNewQuestion("flex")
        setShowHideInfo("none")
    }
    const handleLandingPage = () => {
        setShowHideLandingPage("flex")
        setShowHideAddNewQuestion("none")
        setShowHideInfo("none")
    }
    const handleAddShowInfo = () => {
        setShowHideLandingPage("none")
        setShowHideAddNewQuestion("none")
        setShowHideInfo("flex")
    }




    const handleComeBack = () => {
        setShow("none");
        setHide("flex");

        setTimeout(() => {
            setTransitionClass("startBox_green");
        }, 300)
        setTimeout(() => {
            setHideImmediately("flex");
        }, 500)
    }


    return (
        <>
            <div className="bottomPosition">
                <div style={opacityStyle} className="leaves_focus"/>
                <div className="bottomWindow">
                    <div className="startBox_container">
                        <div style={turnStyle} className="flipping_box">

                            <div className="arrow_box">
                                <i className="fas fa-arrow-down"/>
                            </div>

                            <div className="gameBox_container">
                                <div style={hideStyle} className={transitionClass}>
                                    <div style={hideImmediatelyStyle} className="hideImmediatelyClass">

                                        <div style={landingPageStyle} className="landingPageClass">
                                            <LandingPage start={handleStart}
                                                         addQuestion={handleAddNewQuestion}
                                                         showInfo={handleAddShowInfo}/>
                                        </div>

                                        <div style={infoStyle} className="InfoClass">
                                            <Info/>
                                            <button onClick={handleLandingPage} className="backButton">
                                                <i className="fas fa-arrow-circle-left"/>
                                            </button>
                                        </div>

                                        <div style={addNewQuestionStyle} className="addNewQuestionClass">
                                            <NewQuestionAdd/>
                                            <button onClick={handleLandingPage} className="backButton">
                                                <i className="fas fa-arrow-circle-left"/>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <div style={showStyle}>
                                    <Flashcard goBack={handleComeBack}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default GameBox;

