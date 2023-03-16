import axios from 'axios';

axios.defaults.baseURL = 'https://64131cd43b710647375fdd79.mockapi.io/';

export const addContact = async value => {
  const response = await axios.post('/contacts', value);
  return response.data;
};
