import React from 'react';

class VideoDetail extends React.Component{
  constructor(){
    super();
    console.log("Contructor");
  }
  componentWillMount(){
    console.log("ComponentWillMount");
  }
  componentDidMount(){
    console.log("ComponentDidMount");
  }
  render(){
    console.log("Render");
    if(!this.props.video){
      return <div>Loading...</div>;
    }

    var video = this.props.video;
    var videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (
      <div className="video-detail col-md-7">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>  
      </div>

    )
  }
}

export default VideoDetail;