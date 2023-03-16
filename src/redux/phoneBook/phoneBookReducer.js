import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
} from './phoneBookActions';

const entities = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer([], {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const error = createReducer([], {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
