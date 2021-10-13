import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import getHotDogs from './menu-selector';
import {
  addHotDogSuccess,
  deleteHotDogSuccess,
  fetchHotDogsSuccess,
  updateHotDogSuccess,
} from './menu-actions';

const hotDogs = createReducer([], {
  [fetchHotDogsSuccess]: (_, { payload }) => payload,
  [addHotDogSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [updateHotDogSuccess]: (state, { payload }) => {
    state.map(hotDog => {
      if (hotDog.id === payload.id) {
        hotDog = { ...payload };
      }
    });
  },
  [deleteHotDogSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({ hotDogs });
