import axios from 'axios';
import shortid from 'shortid';
import {
  addHotDogSuccess,
  addHotDogRequest,
  addHotDogError,
  deleteHotDogRequest,
  deleteHotDogSuccess,
  deleteHotDogError,
  //   fetchHotDogs,
  fetchHotDogsRequest,
  fetchHotDogsSuccess,
  fetchHotDogsError,
  updateHotDogRequest,
  updateHotDogSuccess,
  updateHotDogError,
} from './menu-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchHotDogs = () => dispatch => {
  dispatch(fetchHotDogsRequest());
  //   try {
  //     const { data } = await axios.get('/hotdogs');
  //     dispatch(fetchHotDogsSuccess(data));
  //   } catch (error) {
  //     dispatch(fetchHotDogsError(error.message));
  //   }
  axios
    .get('/hotdogs')
    .then(({ data }) => dispatch(fetchHotDogsSuccess(data)))
    .catch(error => dispatch(fetchHotDogsError(error.message)));
};

const addHotDog =
  ({ name, description, price }) =>
  dispatch => {
    const newHotDog = {
      id: shortid.generate(),
      name,
      // img,
      description,
      price,
    };
    dispatch(addHotDogRequest());

    ///add checking for unique name
    axios
      .post('/hotdogs', newHotDog)
      .then(({ data }) => dispatch(addHotDogSuccess(data)))
      .catch(error => dispatch(addHotDogError(error.message)));
  };

const deleteHotDog = id => dispatch => {
  dispatch(deleteHotDogRequest());
  axios
    .delete(`/hotdogs/${id}`)
    .then(() => dispatch(deleteHotDogSuccess(id)))
    .catch(error => dispatch(deleteHotDogError(error.message)));
};

const updateHotDog = (id, currName, currPrice, currDescription) => dispatch => {
  dispatch(updateHotDogRequest());
  console.log('updateHotDog name', currName);
  ///add checking for unique name
  axios
    .put(`/hotdogs/${id}`, {
      name: currName,
      description: currDescription,
      price: currPrice,
    })
    .then(({ data }) => dispatch(updateHotDogSuccess(data)))
    .catch(error => dispatch(updateHotDogError(error.message)));
};

export default { addHotDog, deleteHotDog, updateHotDog, fetchHotDogs };
