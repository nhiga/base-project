/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import PageContent from 'components/page-content/PageContent';

import './search.scss';

interface ISearchState {
  searchTerm: string;
}

class Search extends Component<{}, ISearchState> {
  public state = {
    searchTerm: ''
  };

  public handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  public render() {
    const { searchTerm } = this.state;

    return (
      <PageContent>
        <main className="page-content__main">
          <h2 className="page-content__title">Search</h2>
          <div className="search__input">
            <input
              className="search__input-text"
              type="search"
              placeholder="Search by name, album, or song"
              value={searchTerm}
              onChange={this.handleSearchChange}
            />
          </div>
        </main>
      </PageContent>
    );
  }
}

export default Search;
