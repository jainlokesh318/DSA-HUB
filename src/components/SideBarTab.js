import React from 'react'
import "./SideBarTab.css";

function SideBarTab({selected, Icon, title}) {
    return (
        <div className={`sideBarTab ${selected && "selected"}`}>
            <Icon className="sideBarTab__icon" />
            <h2 className="sideBarTab__title">{title}</h2>
        </div>
    )
}

export default SideBarTab
