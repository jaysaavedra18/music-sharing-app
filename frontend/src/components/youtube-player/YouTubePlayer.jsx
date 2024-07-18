// YouTubePlayer.js
import React from "react";
import "./YouTubePlayer.css";

const YouTubePlayer = ({ title, url }) => {
  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(url);

  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <div className="youtube-player-container">
      <h3> {title} </h3>
      <div className="youtube-player-wrapper">
        <iframe
          className="youtube-player"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;
