import React, {useEffect} from "react";
import './App.scss';
import MainLayout from "../MainLayout/MainLayout";
import StartBox from "../StartBox/StartBox";
// import Flashcard from "../Flashcard/Flashcard";


function App() {

useEffect(() => {
    // window.onload = () => { ///w ten sposób tez nie działa
        // window.scrollTo(0, (0.2*window.innerWidth)); ///to powinno ustawiać do początku billboardu, czemu przesuwa?
        const startY= (0.2*window.innerWidth-((window.innerHeight-(0.33*window.innerWidth))/2)).toFixed(0)
        window.scrollTo(0, startY)
    // }
    // console.log(startY);
})


    return (
        <>
            <MainLayout/>
            <StartBox/>
            {/*<Flashcard/>*/}
        </>
    );
}

export default App;
