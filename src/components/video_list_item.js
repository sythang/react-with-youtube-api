import React from 'react';

class VideoListItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var video = this.props.video;
    var imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li onClick={()=> this.props.onVideoSelect(video)} className="media list-group-item">
        <img className="d-flex mr-3" src={imageUrl} alt="Generic placeholder image" />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{video.snippet.title}</h5>
        </div>
      </li>
    );
  }
}
export default VideoListItem;