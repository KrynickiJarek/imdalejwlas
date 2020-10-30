import React from 'react';
import "./_billboard.scss"


const Billboard = () => {

    return (
        <div className="billboard_container">
            <div className="pole"/>
            <div className="billboard">
                <h2 className="billboard_head">IM DALEJ W LAS<br/>TYM WIĘCEJ</h2>
                <div className="js_logo-black"/>
                <div className="js_logo"/>
                <a href="https://github.com/KrynickiJarek" className="billboard_link">by Jarosław Krynicki</a>
            </div>
        </div>
    )
}

export default Billboard;