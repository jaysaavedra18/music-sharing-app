// VideoPlayer.js
import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ title, url }) => {
  return (
    <div className="video-player-container">
      <h3>{title}</h3>
      <div className="video-player-wrapper">
        <video className="video-player" controls>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
