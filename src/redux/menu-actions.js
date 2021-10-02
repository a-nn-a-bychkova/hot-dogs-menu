import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addHotDog = createAction(
  'menu/addHotDogRequest',
  ({ img, price, name, description }) => ({
    payload: {
      id: shortid.generate(),
      img,
      price,
      name,
      description,
    },
  }),
);
console.log(
  addHotDog({
    img: 'some-img-5.jpg',
    price: '8',
    name: 'Kharkiv',
    description: 'The best',
  }),
);
export const deleteHotDog = createAction('menu/deleteHotDogRequest');

// export const fetchHotDogsRequest = createAction('menu/fetchHotDogsRequest');
// export const fetchHotDogsSuccess = createAction('menu/fetchHotDogsSuccess');
// export const fetchHotDogsError = createAction('menu/fetchHotDogsError');

// export const addHotDogRequest = createAction('menu/addHotDogRequest');
// export const addHotDogSuccess = createAction('menu/addHotDogSuccess');
// export const addHotDogError = createAction('menu/addHotDogError');

// export const deleteHotDogRequest = createAction('menu/deleteHotDogRequest');
// export const deleteHotDogSuccess = createAction('menu/deleteHotDogSuccess');
// export const deleteHotDogError = createAction('menu/deleteHotDogError');
