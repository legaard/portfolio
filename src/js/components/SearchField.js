import React, { PropTypes } from 'react';


export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
  }

  setFocus() {
    this.searchInput.focus();
  }

  render() {
    return (
      <div id="search-field">
        <i className="fa fa-search" onClick={this.setFocus.bind(this)}></i>
        <input id="search" type="search" placeholder="Seach for project"
               ref={(input) => { this.searchInput = input; }}
               value={this.props.searchValue}
               onChange={this.props.search}/>
      </div>
    );
  }
}

SearchField.PropTypes = {
  search: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
}
