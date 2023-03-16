import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import {
//   fetchingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from 'redux/slice';

// import { fetchContacts } from 'services/api';

axios.defaults.baseURL = 'https://64131cd43b710647375fdd79.mockapi.io/';

export const fetchPhoneBook = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
