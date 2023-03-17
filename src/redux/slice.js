import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchPhoneBook } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,

  reducers: {
    onFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    // get all contacts
    [fetchPhoneBook.pending]: handlePending,
    [fetchPhoneBook.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchPhoneBook.rejected]: handleRejected,

    // add contact
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    // delete contact
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;

      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { onFilter, fetchingInProgress, fetchingSuccess, fetchingError } =
  phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
