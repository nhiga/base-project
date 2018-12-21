/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import ContentPage from 'components/ContentPage';

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
      <ContentPage>
        <div className="content-page__main">
          <h2 className="content-page__title">Search</h2>
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
      </ContentPage>
    );
  }
}

export default Search;
