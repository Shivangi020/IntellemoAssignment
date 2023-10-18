import React, { useRef,useState } from 'react'
import videoLink from './assets/videoplayback.mp4'

const VideoRender = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlayPause = () => {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };

      const handleStop =()=>{
        if(isPlaying){
            videoRef.current.pause();
           videoRef.current.currentTime = 0;
           setIsPlaying(false);
        }
      }
  return (
    <div>
         <video id="myVideo" width="640" height="360" ref={videoRef}>
        <source src={videoLink} type="video/mp4" />
       </video>

    <button id="playButton" onClick={handlePlayPause}>{ isPlaying ? 'Pause' : 'Play'}</button>
    <button id="stopButton" onClick={handleStop}> Stop</button>
    </div>
  )
}

export default VideoRender