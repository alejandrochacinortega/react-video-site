import React from 'react';

class SearchBar extends React.Component {
  constructor(pros) {
    super(pros);

    this.state = {
      term: "Omar"
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term)
  }


}

export default SearchBar;