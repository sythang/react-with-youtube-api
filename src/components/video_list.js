import React, { Component } from 'react';
import VideoListItem from './video_list_item';
import VideoDetail from './video_detail';
class VideoList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    // const videoItems = this.props.videos.map((video) => {
    //   return <VideoListItem video={video} key={video.id.videoId} />;
    // })
    console.log(this.props.videos)
    return(
      <ul className="col-md-4 list-unstyled">
        {
          this.props.videos.map( (video) => {
            return (
              <VideoListItem
                onVideoSelect = { this.props.onVideoSelect }
                video={video}
                key={video.id.videoId} />
            )
          })
        }
      </ul>
    )
  }
}

export default VideoList;