import React, {useState, useEffect} from 'react';
import Flashcard from "../Flashcard/Flashcard";
import "./_startbox.scss"


const StartBox = () => {

    const [boxPosition, setBoxPosition] = useState(window.innerHeight / 2);
    const boxStyle = {}
    boxStyle.bottom = boxPosition;

    useEffect(() => {
        window.onchange = () => {
            setBoxPosition(window.innerHeight / 2);
        }
    })


    const [turn, setTurn] = useState("");
    const turnStyle = {}
    turnStyle.transform = turn;

    useEffect(() => {
        window.onscroll = () => {
            const screenPosition = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
            setTurn(screenPosition >= 0.99 ? "rotateX(180deg)" : "");
        }
    })


    const [hide, setHide] = useState("block");
    const [show, setShow] = useState("none");

    const hideStyle = {};
    const showStyle = {};

    hideStyle.display = hide;
    showStyle.display = show;

    const handleClick = () => {
        setHide("none");
        setShow("block");
    }


    return (
        <>
            <div style={hideStyle} className="startBox_container">

                <div style={boxStyle} className="startBox_box">
                    <div style={turnStyle} className="flipping_box">

                        <div className="arrow_box">
                            <i className="fas fa-arrow-down"/>
                        </div>

                        <div className="startBox_start">
                            <button onClick={handleClick} className="start_button">START</button>
                        </div>


                    </div>
                </div>
            </div>

            <div style={showStyle}>
                <Flashcard/>
            </div>
        </>
    )
}

export default StartBox;