import React from 'react'
import "./SideBar.css";
import SideBarTab from "./SideBarTab";
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function SideBar() {
    return (
        <div className="sideBar">
            <SideBarTab selected Icon={HomeIcon} title="Home"/>
            <SideBarTab Icon={ExploreIcon} title="Explore"/>
            <SideBarTab Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr></hr>
            <SideBarTab Icon={VideoLibraryIcon} title="Library"/>
            <SideBarTab Icon={HistoryIcon} title="History"/>
            <SideBarTab Icon={WatchLaterIcon} title="Watch Later"/>
            <SideBarTab Icon={ThumbUpAltIcon} title="Liked Videos"/>
            
        </div>
    )
}

export default SideBar
