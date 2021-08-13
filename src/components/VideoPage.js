import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import "./VideoPage.css"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import axios from "axios";

function VideoPage() {
   const [video, setVideo] = useState(true);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [editorState, setEditorState] = useState(
       () => EditorState.createEmpty(),
     );
   const {videoId} = useParams();
   
//    useEffect(() => {console.log({video})}, [video])

   useEffect(() => {
       (async function() {
    setIsLoading(true);
    try{
        const res = await axios.get(`https://ui-play.lokeshjain318.repl.co/${videoId}`);
        console.log({res});
        if(res.status === 200) {
            setVideo(res.data.video);
            setIsError(false);
        }
    } catch(err) {
        console.log(err);
        setIsError(true);
    } finally {
        setIsLoading(false);
    }
})();
   }, [videoId])
 
   return (
       <div className="videoPage">
           {isError && <h1>Error</h1>}
           {isLoading && <h1>Loading...</h1>}
           {console.log("Hello")}
           { typeof video === "object" ? 
            <div>
           <div className="videoSection">
               <iframe width="800" height="500"
                       title="Youtube Player"
                       src={`https://www.youtube.com/embed/${videoId}`}
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen />
               <h3>{video.snippet.title}</h3>
               <div className="videoStatistics">
                   <p>{`${video.statistics.viewCount} views `} <span>&middot;</span> {video.snippet.publishedAt}</p>
                   <div className="videoStatisticsActions">
                       <div className="videoStatistics_icon">
                           <ThumbUpAltIcon />
                           {video.statistics.likeCount}
                       </div>
                       <div className="videoStatistics_icon">
                           <ThumbDownAltIcon />
                           {video.statistics.dislikeCount}
                       </div>
                       <div className="videoStatistics_icon">
                           <ReplyIcon className="replyIcon"/>
                           {`SHARE`}
                       </div>
                       <div className="videoStatistics_icon">
                           <PlaylistAddIcon/>
                           {`SAVE`}
                       </div>
                       <div className="videoStatistics_icon">
                           <MoreHorizIcon/>
                       </div>
                   </div>
               </div>
               <div className="channelInfo">
                   <div className="channelText">
                       <Avatar />
                       <h4>{video.snippet.channelTitle}</h4>
                   </div>
                   <div className="channelButtons">
                       <button id="joinButton">JOIN</button>
                       <button id="subscribeButton">SUBSCRIBE</button>
                   </div>
               </div>
           </div>
           
           {console.log({video})}
           </div> : <></>}
           <div className="notesSection">
               <Editor editorState={editorState} onChange={setEditorState} />
               {console.log({editorState})}
           </div>
       <div>
   </div>
</div>
   )


    
   }

export default VideoPage
