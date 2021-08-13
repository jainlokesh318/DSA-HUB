import React, {useState, useEffect} from 'react'
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import axios from 'axios';

function RecommendedVideos() {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async function() {
            setIsLoading(true);
            try{
                const res = await axios.get("https://ui-play.lokeshjain318.repl.co");
                setVideos(res.data.videos);
                setIsError(false);
            } catch(err) {
                console.log(err);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return (
        <div className="recommendedVideos">
            <div className="recommendedVideos__categories">
                <div className="category current_category">All</div>
                <div className="category">Arrays</div>
                <div className="category">Trees</div>
                <div className="category">Linked List</div>
                <div className="category">Graphs</div>
                <div className="category">BFS</div>
                <div className="category">Dynamic Programming</div>
            </div>
            <div className="videos">
                {isError && <h1>Error</h1>}
                {isLoading && <h1>Loading...</h1>}
                {videos.map(video => <VideoCard 
                                            title={video.snippet.title} 
                                            channel={video.snippet.channelTitle} 
                                            thumbnail={video.snippet.thumbnails.default.url} 
                                            timestamp={video.snippet.publishedAt} 
                                            views={`${parseInt(video.statistics.viewCount/1000)}k`}
                                            videoId={video.id}
                                     />
                )}
            </div>
        </div>
    )
}

export default RecommendedVideos
