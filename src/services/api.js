import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64131cd43b710647375fdd79.mockapi.io/',
});

export const fetchContacts = async () => {
  const response = await instance.get('/contacts');

  return response.data;
};

export const addContact = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`, id);
  return data;
};
