"use client"
import React from "react";

interface MenuButtonProps{
    outerContainer: string,
    innerContainer: string,
    func: object
}

const MenuButton: React.FC<MenuButtonProps> = ( MenuButtonProps ) => {
    return(
        <div className={MenuButtonProps.outerContainer}>
            <div className={MenuButtonProps.innerContainer}>
                <div className={`bar1`}></div>
                <div className={`bar2`}></div>
                <div className={`bar3`}></div>
            </div>
        </div>
    );
}

export default MenuButton;