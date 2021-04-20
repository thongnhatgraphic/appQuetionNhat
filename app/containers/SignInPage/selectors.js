import { createSelector } from 'reselect';
import { initialState } from './reducer';


const selectUser = state => state.user || initialState;
const makeSelectUser = () =>
  createSelector(
    selectUser,
    State => State.user,
  );

const selectMessage = state => state.message || initialState;
const makeSelectMessage = () =>
  createSelector(
    selectMessage,
    State => State.message,
  );












export { selectUser, makeSelectUser, selectMessage, makeSelectMessage };
