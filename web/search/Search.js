/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from '../base/Header';

import './search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <Header />
        <div className="page__content--center">
          <div className="search__input">
            <input
              className="search__input-text"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={this.handleSearchChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
