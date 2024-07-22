import React from "react";
import YouTubePlayer from "../components/youtube-player/YouTubePlayer";

function Demo({}) {
  const opts = {
    height: "720",
    width: "1080",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const videoId = "6jFVAwtx508";
  if (!videoId) return <div>Invalid Youtube ID</div>;

  return (
    <div style={{ margin: "20px" }}>
      {/* <YouTube videoId={videoId} opts={opts} onReady={onReady} /> */}
      <YouTubePlayer
        title={"Live demo here"}
        url={"https://youtu.be/l84o3qjsCf4"}
      />
    </div>
  );
}

export default Demo;
