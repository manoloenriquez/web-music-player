// import { useState, useEffect } from 'react';

import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

import SearchForm from '../../components/Search/SearchForm';

const Search = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <h1>
            Search
          </h1>
          <SearchForm />
        </Route>
        <Route path={`${path}/track`}>
          <h1>Current Track</h1>
        </Route>
      </Switch>
    </>
  )
};

export default Search;