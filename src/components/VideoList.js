import React from "react";
import VideoItem from "./VideoItem";

// this is functional component Look @ how props work
const VideoList = ({ videos, onVideoSelect }) => {
    // props.videos  is array 

   const renderVids = videos.map((vid) => {
        return (
            <VideoItem key={vid.id.videoId} onVideoSelect={onVideoSelect} vid={vid} />
        );
    });

    return (
        <div className="ui relaxed divided list">
            {renderVids}  
        </div>
      );
}

export default VideoList;