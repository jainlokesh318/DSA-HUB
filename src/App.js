
import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import VideoPage from './components/VideoPage';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/watch/:videoId" element={<VideoPage/>} />
        <Route path="*" element={<PageNotFound />}/> 
      </Routes>
    </div>
  );
}

export default App;
