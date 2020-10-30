import React, {useState, useEffect} from 'react';
import "./_leavesfocus.scss"


const LeavesFocus = () => {
    const [opacity, setOpacity] = useState(1);
    const opacityStyle = {}
    opacityStyle.opacity = opacity;


    useEffect(() => {
            window.onscroll = () => {
                const opacityCalc = (4.5 - 5 * ((window.scrollY + window.innerHeight) / document.body.scrollHeight)).toFixed(2)
                setOpacity(opacityCalc > 1 ? 1 : opacityCalc < 0 ? 0 : opacityCalc);
            }
        }) ///było []
    return (
        <div style={opacityStyle} className="bg_z3">
        </div>
    )
}

export default LeavesFocus;