import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'services/api';
import { fetchPhoneBook } from './phoneBook/phoneBookOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchPhoneBook.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchPhoneBook.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchPhoneBook.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },

  // reducers: {
  //   addContact: (state, action) => {
  //     state.contacts.push(action.payload);
  //   },

  //   deleteContact: (state, action) => {
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.contacts.splice(index, 1);
  //   },

  //   onFilter(state, action) {
  //     state.filter = action.payload;
  //   },
  // },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;

// Selectors

export const getContacts = state => state.phoneBook.contacts;
export const getFilteredContacts = state => state.phoneBook.filter;
