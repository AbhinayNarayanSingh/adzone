import { useState } from "react";

const YoutubeVideo = (props) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(""); // only for youtube thumbnail preview

    const { name = "youtubeVideoURL", value, changeHandler } = props;

    const youtubeVideoPreviewHandler = (e) => {
        const videoUrl = e.target.value;
    
        // Regex pattern to match the video ID parameter in the URL
        const regex = /(?:\?|&)v=([a-zA-Z0-9_-]{11})(?:&|$)/;
    
        const match = videoUrl.match(regex);
    
        if (match) {
          const videoId = match[1];
          setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/0.jpg`);
        }
      };


  return (
    <>
                  <input
                type="text"
                name={name}
                onBlur={youtubeVideoPreviewHandler}
                value={value[name]}
                onChange={changeHandler}
              />
              <p className="help-text">
                Add a YouTube video to your listing e.g. https://www.youtube.com/watch?v=:id
              </p>
              {thumbnailUrl && (
                <div className="youtube-video-thumbnail">
                  <img src={thumbnailUrl} alt="Video thumbnail" />
                </div>
              )}
    </>
  )
}

export default YoutubeVideo