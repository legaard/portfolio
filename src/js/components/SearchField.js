import React from 'react';
import PropTypes from 'prop-types';

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
  }

  setFocus() {
    this.searchInput.focus();
  }

  render() {
    return (
      <div id="search-field" className="row">
        <div className="col-sm-12">
          <label onClick={this.setFocus.bind(this)}>
            <i className="fa fa-search"></i> Search
          </label>
          <input type="search" placeholder="Seach for projects"
                 ref={(input) => {this.searchInput = input;}}
                 value={this.props.searchValue}
                 onChange={this.props.search}/>
        </div>
      </div>
    );
  }
}

SearchField.PropTypes = {
  search: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
}
