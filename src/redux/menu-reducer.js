import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addHotDog,
  deleteHotDog,
  // addHotDogRequest,
  // addHotDogSuccess,
  // addHotDogError,
  // deleteHotDogRequest,
  // deleteHotDogSuccess,
  // deleteHotDogError,
  // fetchHotDogsRequest,
  // fetchHotDogsSuccess,
  // fetchHotDogsError,
} from './menu-actions';

// const filter = createReducer('', {
//   [changeFilter]: (_, action) => action.payload,
// });
// const hotDogs = createReducer([], {
//   [fetchHotDogsSuccess]: (_, { payload }) => payload,
//   [addHotDogSuccess]: (state, { payload }) => {
//     return [...state, payload];
//   },
// [deleteHotDogSuccess]: (state, { payload }) =>
// state.filter(({ id }) => id !== payload),
// });
// export default combineReducers({
//   hotDogs,
// });
const hotDogs = createReducer([], {
  [addHotDog]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteHotDog]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({
  hotDogs,
});
