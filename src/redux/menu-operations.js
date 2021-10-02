// import axios from 'axios';
// import {
//   addHotDogSuccess,
//   addHotDogRequest,
//   addHotDogError,
//   deleteHotDogRequest,
//   deleteHotDogSuccess,
//   deleteHotDogError,
//   fetchHotDogsRequest,
//   fetchHotDogsSuccess,
//   fetchHotDogsError,
// } from './menu-actions';

// axios.defaults.baseURL = 'http://localhost:4040';

// const fetchHotDogs = () => dispatch => {
//   dispatch(fetchHotDogsRequest());
//   //   try {
//   //     const { data } = await axios.get('/hotdogs');
//   //     dispatch(fetchHotDogsSuccess(data));
//   //   } catch (error) {
//   //     dispatch(fetchHotDogsError(error.message));
//   //   }

//   axios
//     .get('/hotdogs')
//     .then(({ data }) => dispatch(fetchHotDogsSuccess(data)))
//     .catch(error => dispatch(fetchHotDogsError(error.message)));
// };

// const addHotDog =
//   ({ name, img, description, price }) =>
//   dispatch => {
//     const newHotDog = {
//       // id: shortid.generate(),
//       name,
//       img,
//       description,
//       price,
//     };
//     dispatch(addHotDogRequest());

//     axios
//       .post('/hotogs', newHotDog)
//       .then(({ data }) => dispatch(addHotDogSuccess(data)))
//       .catch(error => dispatch(addHotDogError(error.message)));
//   };

// const deleteHotDog = id => dispatch => {
//   dispatch(deleteHotDogRequest());
//   axios
//     .delete(`/hotdogs/${id}`)
//     .then(() => dispatch(deleteHotDogSuccess(id)))
//     .catch(error => dispatch(deleteHotDogError(error.message)));
// };

// export default { addHotDog, deleteHotDog, fetchHotDogs };
