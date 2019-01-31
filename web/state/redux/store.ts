// import { matchRoutes } from "react-router-config";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { SessionState } from './actions/session-actions';
import { UserState } from './actions/user-actions';
import sessionReducer, { initialState as sessionInitialState } from './reducers/session-reducer';
import userReducer, { initialState as userInitialState } from './reducers/user-reducer';
import { Session } from 'inspector';

// TODO: Implement redux-persist

interface State {
  session: SessionState;
  user: UserState;
}

interface ServerState {
  session: SessionState;
}

const configureStore = (initialState: State | ServerState) => {
  // TODO: Retrieve CMS content
  // const branch = matchRoutes(routes, req.originalUrl)

  return createStore(
    combineReducers({ session: sessionReducer, user: userReducer }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
