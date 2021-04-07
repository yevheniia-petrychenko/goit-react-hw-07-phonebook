import axios from 'axios';
import {
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  fetchRequest,
  fetchSuccess,
  fetchError,
} from '../redux/actions';

axios.defaults.baseURL = 'http://localhost:4040/';

const fetchContact = () => dispatch => {
  dispatch(fetchRequest());

  // try {
  //   const { data } = await axios.get('/contacts');
  //   dispatch(fetchSuccess(data));
  // } catch (error) {
  //   dispatch(fetchError(error));
  // }

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchError(error)));
};

const addContact = ({ name, number }) => dispatch => {
  const contact = { name, number };
  dispatch(addRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addSuccess(data)))
    .catch(error => dispatch(addError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch(error => dispatch(deleteError(error)));
};

export { addContact, deleteContact, fetchContact };
