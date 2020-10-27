import React, {useState, useEffect} from 'react';
import "./_mainlayout.scss"


const LeavesFocus = () => {
    const [opacity, setOpacity] = useState(1);
    const opacityStyle = {}
    opacityStyle.opacity = opacity;


useEffect(() => {
        window.onscroll = () => {
            const opacityCalc = (4.5 - 5 * ((window.scrollY + window.innerHeight) / document.body.scrollHeight)).toFixed(2)
            setOpacity(opacityCalc > 1 ? 1 : opacityCalc < 0 ? 0 : opacityCalc);
            // console.log("xxx" + window.scrollY);
            // console.log(document.body.scrollHeight);
            console.log(opacityCalc);

        }
    },[]
)
return (
    <div style={opacityStyle} className="bg_z3">
    </div>
)
}


const MainLayout = () => {
    return (
        <div className="bg_z0">

            <div className="billboard_container">
                <div className="pole"/>
                <div className="billboard">
                    <h2 className="billbord_head">IM DALEJ W LAS<br/>TYM WIĘCEJ</h2>
                    <div className="js_logo"/>
                </div>
            </div>

            <div className="overflow_container">
                <div className="bg_z1">
                </div>
            </div>


            <div className="bg_z2">
                <LeavesFocus/>
            </div>
        </div>

    );
};
export default MainLayout;


// const HiddingBlur = () => {
//     const [opacity, setOpacity] = useState(1);
//     const opacityStyle = {}
//     opacityStyle.opacity = opacity;
//
//
//     const maxHeight = document.body.scrollHeight;
//     const currPosition = document.documentElement.scrollTop;
//
//     console.log(maxHeight);
//     console.log(currPosition);
//
//
//     const opacityHeight= maxHeight
//
//     const opacityScroll = () => {
//         setOpacity(opacityHeight);
//     }
//
//     useEffect(()=>{
//         opacityScroll();
//     })
//     return (
//         <div style={opacityStyle} className="bg_z3">
//         </div>
//     )
// }