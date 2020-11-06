import React from 'react';
import "./_landingpage.scss"


const LandingPage = ({start, addQuestion, showInfo}) => {


    const handleStart = () => {
        start()
    }
    const handleAddQuestion = () => {
        addQuestion()
    }
    const handleInfo = () => {
        showInfo()
    }


    return (
        <div className="landingPage_container">
            <div className="infoBox">
                <div className="menu_container">
                    <div className="icon_container">
                        <i className="fas fa-user-circle"/>
                        <h3>Logowanie<br/>(wkrótce)</h3>
                    </div>
                    <div className="icon_container">
                        <i onClick={handleInfo} className="fas fa-info-circle"/>
                        <h2>O stronie</h2>
                    </div>
                    <div className="icon_container">
                        <i onClick={handleStart} className="fas fa-play-circle"/>
                        <h1>Start</h1>
                    </div>
                    <div className="icon_container">
                        <i onClick={handleAddQuestion} className="fas fa-plus-circle"/>
                        <h2>Dodaj pytanie</h2>
                    </div>
                    <div className="icon_container">
                        <i className="fas fa-times-circle"/>
                        <h3>Resetuj<br/>poziomy</h3>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default LandingPage;

