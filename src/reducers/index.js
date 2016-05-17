import { combineReducers } from 'redux';
import createReducer from 'redux-create-reducers';
import update from 'react/lib/update';

import data from '../dummy-data';

const defaultState = {};

// TODO: createReducer returns an object instead of an array here.
//       find out why, maybe a parameter?
// let pages = createReducer(defaultState, (handleAction) => {
//   handleAction('REQUEST_PAGE_ITEMS', (state, action) => {
//     return state.concat(['blah']);
//   });
// })();

function pages(state = [], action) {
  switch (action.type) {
    case 'REQUEST_PAGE_ITEMS':
      return state.concat([data.pages[0]])
    default:
      return state
  }
}

let reducer = combineReducers({
  pages
});

export default reducer;
