import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyBFIHXBmjDukOh8MM1-VCcGux6HMXjrTds';


class App extends React.Component{
	constructor(){
		super();
		this.state = { 
			videos: [],
			selectedVideo: null
		 };
	}
	componentDidMount(){
		this.videoSearch('nơi ta chờ em');
	}

	videoSearch(term){
		YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			 });
		});
	}
	render(){
		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
		return (
			<div className="container">
				<div className="row">
					<SearchBar onSearchTermChange={ videoSearch} />	
				</div>
				<div className="row">
					<VideoDetail video={ this.state.selectedVideo } />
					<VideoList 
					onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
					videos={ this.state.videos } />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));