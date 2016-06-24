import React from 'react';
import VideoListItem from './video_list_item'

// Error: each child in an array or iterator should have a unique "key" prop.
// Fix: give the VideoListIem in the array a unique key, such as the etag for youtube
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
