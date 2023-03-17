import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Api from '../services/api';

axios.defaults.baseURL = 'https://64131cd43b710647375fdd79.mockapi.io/';

export const fetchPhoneBook = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await Api.fetchContacts();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await Api.addContact(contact);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const data = await Api.deleteContact(contactId);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
