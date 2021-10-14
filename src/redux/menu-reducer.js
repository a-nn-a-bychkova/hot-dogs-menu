import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
    const newState = state.map(hotDog => {
      if (hotDog.id === payload.id) {
        return { ...hotDog, ...payload };
      }
      return hotDog;
    });
    return [...newState];
  },
  [deleteHotDogSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({ hotDogs });
