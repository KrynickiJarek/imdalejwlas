import React from "react";
import './App.scss';
import MainLayout from "../MainLayout/MainLayout";
import GameBox from "../GameBox/GameBox";


function App() {

    if ('scrollRestoration' in History) {
        History.scrollRestoration = 'manual';
    }
    window.onload = () => {
        const startY = (0.2 * window.innerWidth - ((window.innerHeight - (0.33 * window.innerWidth)) / 2)).toFixed(0)
        window.scrollTo(0, startY)
    }

    return (
        <>
            <MainLayout/>
            <GameBox/>
        </>
    );
}

export default App;
