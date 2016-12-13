import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VIdeoDetail';



const API_KEY = "AIzaSyBLJGzrpBCUCIn1dwXKacc2jEWlEtMeWDI";

class App extends React.Component {
  constructor(pros) {
    super(pros);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('football');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
