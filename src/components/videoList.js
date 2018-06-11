import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = ({videos, onVideoSelect}) => {

  const videoItems = videos.map((video) => {
    console.log(video)
    return <VideoListItem key = {video.etag}
                          video={video}
                          onVideoSelect={onVideoSelect}/>
  })

  return(
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList;
