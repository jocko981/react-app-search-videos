import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {

    state = { searchTerm: "home" };

    onInputChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.searchTerm);

        //... do Callback from Parent component
    };

    render() {
        return (
          <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search for a Video!</label>
                      <input 
                        type="text" 
                        value={this.state.searchTerm}
                        onChange={this.onInputChange} />
                </div>
            </form>
            <button className="ui button primary" onClick={this.onFormSubmit}>Search</button>
          </div>);
    }
}

export default SearchBar;