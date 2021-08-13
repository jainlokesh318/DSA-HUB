import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MicIcon from '@material-ui/icons/Mic';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <p className="title">UI-Live</p>
            </div>

            <div className="header__middle">
                <div className="header__middle__search">
                    <input placeholder="Search" type="text"/>
                    <SearchIcon className="header__searchIcon" fontSize="small"/>
                </div>
                <MicIcon className="header__micIcon" />
            </div>
            
            <div className="header__right">
                <VideoCallIcon className="header__right__icon"/>
                <AppsIcon className="header__right__icon"/>
                <NotificationsIcon className="header__right__icon"/>
                <Avatar className="header__right__icon" fontSize="small">LJ</Avatar>
            </div>
        </div>
    )
}

export default Header
