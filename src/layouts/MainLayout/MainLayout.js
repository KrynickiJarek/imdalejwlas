import React from 'react';
import Billboard from "./Billboard/Billboard";
import "./_mainlayout.scss"


const MainLayout = () => {

    return (
        <div className="all_layout">
            <div className="bg_z0">
                <Billboard/>
                <div className="bg_z1"/>
                <div className="bg_z2"/>
            </div>
        </div>
    );
};
export default MainLayout;

