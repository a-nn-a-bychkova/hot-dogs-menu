import axios from 'axios';
import shortid from 'shortid';
import {
  addHotDogSuccess,
  addHotDogRequest,
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

axios.defaults.baseURL = 'http://localhost:8080/api';

const fetchHotDogs = dispatch => {
  dispatch(fetchHotDogsRequest());
  axios
    .get('/hotdog')
    .then(({ data }) => dispatch(fetchHotDogsSuccess(data)))
    .catch(error => dispatch(fetchHotDogsError(error.message)));
};

const addHotDog =
  ({ name, img, price, description }) =>
  dispatch => {
    const newHotDog = {
      // id: shortid.generate(),
      name,
      img,
      price,
      description,
    };
    dispatch(addHotDogRequest());
    axios
      .post('/hotdog', newHotDog)
      .then(({ data }) => dispatch(addHotDogSuccess(data)))
      .catch(error => dispatch(addHotDogError(error.message)));
  };

const deleteHotDog = id => dispatch => {
  dispatch(deleteHotDogRequest());
  axios
    .delete(`/hotdog/${id}`)
    .then(() => dispatch(deleteHotDogSuccess(id)))
    .catch(error => dispatch(deleteHotDogError(error.message)));
};

const updateHotDog =
  ({ id, currName, currImg, currPrice, currDescription }) =>
  dispatch => {
    dispatch(updateHotDogRequest());

    axios
      .put(`/hotdog/${id}`, {
        name: currName,
        img: currImg,
        price: currPrice,
        description: currDescription,
      })
      .then(({ data }) => {
        dispatch(updateHotDogSuccess(data));
      })
      .catch(error => dispatch(updateHotDogError(error.message)));
  };

export default { addHotDog, deleteHotDog, updateHotDog, fetchHotDogs };
