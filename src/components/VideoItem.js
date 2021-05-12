import React from "react";
import "./VideoItem.css";

const VideoItem = ({ vid, onVideoSelect }) => {
  // onClick trigeruje se samo kada ima Vid u njega
  // COmmunication from CHILD --> PARENT
    return (
      <div onClick={() => onVideoSelect(vid)} className="video-item item">
      
      <img alt={vid.snippet.title} className="ui image" src={vid.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">{vid.snippet.title}</div>
        </div>
          
      </div>
    );
}

export default VideoItem;