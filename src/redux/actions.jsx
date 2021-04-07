import { createAction } from '@reduxjs/toolkit';

const fetchRequest = createAction('contacts/fetchRequest');
const fetchSuccess = createAction('contacts/fetchSuccess');
const fetchError = createAction('contacts/fetchError');

const addRequest = createAction('contacts/addRequest');
const addSuccess = createAction('contacts/addSuccess');
const addError = createAction('contacts/addError');

// const addContact = createAction('contacts/add', ({ name, number }) => ({
//   payload: {
//     name: name,
//     number: number,
//     id: uuidv4(),
//   },
// }));

// const addContact = contacts => ({
//   type: 'contacts/add',
//   payload: {
//     name: contacts.item.name,
//     number: contacts.item.number,
//     id: uuidv4(),
//   },
// });

const deleteRequest = createAction('contacts/deleteRequest');
const deleteSuccess = createAction('contacts/deleteSuccess');
const deleteError = createAction('contacts/deleteError');

// const deleteContact = createAction('contacts/delete');

// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });

const filter = createAction('contacts/contactFilter');

// const filter = value => ({
//   type: 'contacts/filter',
//   payload: value,
// });
export {
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  fetchRequest,
  fetchSuccess,
  fetchError,
  filter,
};
