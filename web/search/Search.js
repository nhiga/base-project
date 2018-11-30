/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import './search.scss';

class Search extends Component {
  render() {
    return (
      <div className="page-search">
        <div className="search-header">
          <div className="search-title">Search</div>
          <div className="search-input">
            <input type="text" placeholder="Search" value="" />
          </div>
        </div>
        <div className="search-results">
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
          <div className="search-result">Result</div>
        </div>
      </div>
    );
  }
}

export default Search;
