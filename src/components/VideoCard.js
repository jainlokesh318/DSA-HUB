import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom"
import "./VideoCard.css";

function VideoCard({title, channel, thumbnail, channelImg, timestamp, views, videoId}) {
    return (
        <div className="videoCard">
            <Link to={`/watch/${videoId}`}><img className="videoCard__thumbnail" src={thumbnail} alt=""/></Link>
            <div className="videoCard__info">
                <Avatar 
                    src={channelImg} 
                    className="videoCard__avatar"
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} | {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard