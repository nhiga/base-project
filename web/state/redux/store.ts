// import { matchRoutes } from "react-router-config";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { SessionState } from './actions/session-actions';
import { UserState } from './actions/user-actions';
import sessionReducer from './reducers/session-reducer';
import userReducer from './reducers/user-reducer';

// TODO: Implement redux-persist

export interface AppState {
  session: SessionState;
  user: UserState;
}

interface ServerState {
  session: SessionState;
}

const configureStore = (initialState?: AppState | ServerState) =>
  createStore(
    combineReducers({ session: sessionReducer, user: userReducer }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default configureStore;
