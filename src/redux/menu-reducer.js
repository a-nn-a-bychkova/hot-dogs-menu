import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addHotDog,
  deleteHotDog,
  fetchHotDogs,
  addHotDogRequest,
  addHotDogSuccess,
  addHotDogError,
  deleteHotDogRequest,
  deleteHotDogSuccess,
  deleteHotDogError,
  fetchHotDogsRequest,
  fetchHotDogsSuccess,
  fetchHotDogsError,
  updateHotDogRequest,
  updateHotDogSuccess,
  updateHotDogError,
} from './menu-actions';

const hotDogs = createReducer([], {
  [fetchHotDogsSuccess]: (_, { payload }) => payload,
  [addHotDogSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [updateHotDogSuccess]: (state, { payload }) => {
    return;
  },
  [deleteHotDogSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const hotDogs = createReducer([], {
//   [addHotDog]: (state, { payload }) => {
//     return [...state, payload];
//   },
//   [deleteHotDog]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

export default combineReducers({ hotDogs });
