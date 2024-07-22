import React from "react";
import YouTubePlayer from "../components/youtube-player/YouTubePlayer";
import VideoPlayer from "../components/video-player/VideoPlayer";

function Demo({}) {
  const opts = {
    height: "720",
    width: "1080",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div style={{ margin: "20px" }}>
      {/* <YouTubePlayer
        title={"Live demo here"}
        url={"https://youtu.be/l84o3qjsCf4"}
      /> */}
      <VideoPlayer
        title={"Live Tech Demo"}
        url={
          "https://s3.us-east-2.amazonaws.com/www.weallison.com/videos/Final+Demo.mp4"
        }
      />
    </div>
  );
}

export default Demo;
