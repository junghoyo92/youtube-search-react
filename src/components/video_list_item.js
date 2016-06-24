import React from 'react';

// ( {video} ) is an ES6 notation for "const video=props.video"
// states that the prop has a video prop and create a new var called video
const VideoListItem = ( {video, onVideoSelect} ) => {
  const imageURL = video.snippet.thumbnails.default.url;


  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
