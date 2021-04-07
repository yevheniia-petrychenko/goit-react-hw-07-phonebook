import { createSelector } from '@reduxjs/toolkit';

const getIsLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.contactFilter;

const getAllContacts = state => state.contacts.items;

// const getVisibleContact = state => {
//   const allContacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

const getVisibleContact = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getIsLoading, getFilter, getVisibleContact };
