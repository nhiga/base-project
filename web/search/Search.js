/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from '../Header/Header';

import './search.scss';

class Search extends Component {
  state = {
    searchTerm: ''
  };

  handleSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <Header />
        <div className="page__content">
          <div className="page__content--left">
            <h2>Search</h2>
          </div>
          <div className="page__content--center">
            <div className="search__input">
              <input
                className="search__input-text"
                type="search"
                placeholder="Search by name, album, or song"
                value={searchTerm}
                onChange={this.handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
