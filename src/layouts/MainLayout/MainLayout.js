import React from 'react';
import LeavesFocus from "./LeavesFocus/LeavesFocus";
import Billboard from "./Billboard/Billboard";
import "./_mainlayout.scss"


const MainLayout = () => {

    return (
        <div className="bg_z0">
            <Billboard/>
            <div className="bg_z1"/>
            <div className="bg_z2">
                <LeavesFocus/>
            </div>
        </div>

    );
};
export default MainLayout;

