import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import PageContent from 'components/page-content/PageContent';
import TextInput from 'components/text-input/TextInput';

import './search.scss';

interface SearchProps extends RouteComponentProps<{}> {}

interface SearchState {
  searchTerm: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  private searchInput = React.createRef<TextInput>();
  public componentDidMount() {
    if (this.searchInput.current) {
      this.searchInput.current.setFocus();
    }
  }
  public render() {
    return (
      <PageContent>
        <main className="page-content__main">
          <h2 className="page-content__title">Search</h2>
          <div className="search__input">
            <TextInput
              ref={this.searchInput}
              inputId="search-term"
              className="search__input-text"
              placeholder="Search by name, album, or song"
            />
          </div>
        </main>
      </PageContent>
    );
  }
}

export default withRouter(Search);
