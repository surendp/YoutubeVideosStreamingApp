import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = ({videos}) => {

  const videoItems = videos.map((video) => {
    console.log(video)
    return <VideoListItem key = {video.etag} video={video} />
  })

  return(
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList;
