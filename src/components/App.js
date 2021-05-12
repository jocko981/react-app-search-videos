import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {

  state = { videos: [], selectedVid: null };

  onSearchSubmit = async (searchTerm) => {
    const response = await youtube.get("/search", { 
      params: {
        q: searchTerm
      }
     });

     this.setState({ 
       videos: response.data.items,
       selectedVid: response.data.items[0] 
     });

     // we care about this only: response.data.items
     // Just console.log(response) and see.. Make it as state in <App /> comp
    
  }

  onVideoSelect = (vid) => {
    this.setState({ selectedVid: vid });

  }

  componentDidMount() {
    this.onSearchSubmit("home");
  }

    render() {
        return (
          <div className="ui container">
            <SearchBar onFormSubmit={this.onSearchSubmit} />
            {this.state.videos.length} videos
            <div className="ui grid">
             <div className="ui row">
              <div className="eleven wide column">
              <VideoDetail vid={this.state.selectedVid} />
              </div>
              <div className="five wide column">
              <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos} />
              </div>
             </div>
            </div>
          </div>);
    }

}

export default App;