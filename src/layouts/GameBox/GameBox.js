import React, {useState} from 'react';
import Flashcard from "./Flashcard/Flashcard";
import NewQuestionAdd from "./NewQuestionAdd/NewQuestionAdd";


import "./_gamebox.scss"


const GameBox = () => {

    const [opacity, setOpacity] = useState(1);
    const opacityStyle = {}
    opacityStyle.opacity = opacity;

    const [turn, setTurn] = useState("");
    const turnStyle = {}
    turnStyle.transform = turn;


    window.onscroll = () => {
        const opacityCalc = (4.5 - 5 * ((window.scrollY + window.innerHeight) / document.body.scrollHeight)).toFixed(1)
        setOpacity(opacityCalc > 1 ? 1 : opacityCalc < 0 ? 0 : opacityCalc);
        // console.log(opacityCalc);

        const screenPosition = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
        setTurn(screenPosition >= 0.95 ? "rotateX(180deg)" : "");
    }


    const [hide, setHide] = useState("flex");
    const [show, setShow] = useState("none");

    const hideStyle = {};
    const showStyle = {};

    hideStyle.display = hide;
    showStyle.display = show;


    const [transitionClass, setTransitionClass] = useState("startBox_green");
    const handleClick = () => {
        setTransitionClass("startBox_white");
        setTimeout(() => {
            setHide("none");
            setShow("flex");
        }, 300)
    }

    const handleClickBack = () => {
        setShow("none");
        setHide("flex");
        setTimeout(() => {
            setTransitionClass("startBox_green");
        }, 300)
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
                                    <NewQuestionAdd/>
                                    <button onClick={handleClick} className="start_button">START</button>
                                </div>
                                <div style={showStyle}>
                                    <Flashcard goBack={handleClickBack}/>
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

