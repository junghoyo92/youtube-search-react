import _ from 'lodash';       // Imports lodash for throttling
import React, { Component } from 'react';  // React is deprecated to work with components only
import ReactDom from 'react-dom'; // ReactDom is used to Render
import YTSearch from 'youtube-api-search';
// User written files must show path of file.
import SearchBar from './components/search_bar'; // Import the SearchBar function from search_bar.js
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD2b7LMuRam3OoBX_yHW43FRR2brO0KUYY';

// Create a new component which should procude some HTML
// const is an ES6 syntax similar to var, but states that this is the final constant value.
// the div portion is NOT html, but jsx, which is not translated by the browser directly.
// That's what babel and webpack are used for. Purpose of jsx is turned into html for users to see.
class App extends Component {                       // React () = { } is similar to JS function() { }
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Tori Kelly');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // when using the same key for the value, then just use the value as the key in the { videos }
    });
  }

  // passing the videos prop (state) to VideoList
  render() {
    // uses the lodash debounce method to run the videoSearch function every 300 milliseconds
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)

// ReactDom.render(App);    // Uncaught ReferenceError: React is not defined; fix: Import React and switch to ReactDom
// Error two: uncaught invariatnt violation: ReactDom.render(). Instead of passing a component class, make sure to
// instantiate it by passing it to React.createElement. (don't pass the whole class type, but an instance of it).
// ReactDom.render(<App />);
// Fix: ReactDom.render(<App />) and not (App)
// Error three: target container is not a DOM element
ReactDom.render(<App />, document.querySelector('.container'))
// Fix: Map to find the container in the document
