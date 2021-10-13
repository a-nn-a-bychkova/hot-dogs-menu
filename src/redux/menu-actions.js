import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addHotDog = createAction(
  'menu/addHotDogRequest',
  ({ img, price, name, description }) => ({
    payload: {
      img,
      price,
      name,
      description,
    },
  }),
);
export const deleteHotDog = createAction('menu/deleteHotDogRequest');

export const fetchHotDogsRequest = createAction('menu/fetchHotDogsRequest');
export const fetchHotDogsSuccess = createAction('menu/fetchHotDogsSuccess');
export const fetchHotDogsError = createAction('menu/fetchHotDogsError');

export const addHotDogRequest = createAction('menu/addHotDogRequest');
export const addHotDogSuccess = createAction('menu/addHotDogSuccess');
export const addHotDogError = createAction('menu/addHotDogError');

export const deleteHotDogRequest = createAction('menu/deleteHotDogRequest');
export const deleteHotDogSuccess = createAction('menu/deleteHotDogSuccess');
export const deleteHotDogError = createAction('menu/deleteHotDogError');

export const updateHotDogRequest = createAction('menu/updateHotDogRequest');
export const updateHotDogSuccess = createAction('menu/updateHotDogSuccess');
export const updateHotDogError = createAction('menu/updateHotDogError');
