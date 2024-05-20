"use client"
import SideBarTwMax from "../SideBarExpanded/SideBarTwMax";
import SideBarTw from "../SideBarMinimized/SideBarTw";
import { useState } from "react";
const SideBarContainer = () => {
    const [maximized, setMaximized] = useState(true);
    const toggleSideBar = () => {
        setMaximized(!maximized);
    }
    return (
        <div>
            <div className={`${maximized ? "overflow-hidden" : "overflow-auto"}`}>
                <SideBarTw maximized={maximized} toggleSideBar={toggleSideBar}/>
            </div>
            <div className={`${maximized ? "block" : "hidden"}`}>
                <SideBarTwMax maximized={maximized}/>
            </div>
        </div>
    );
}

export default SideBarContainer;