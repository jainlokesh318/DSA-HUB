import React from 'react'
import SideBar from './SideBar'
import RecommendedVideos from './RecommendedVideos'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <SideBar/>
            <RecommendedVideos/>
        </div>
    )
}

export default Home
