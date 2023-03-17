import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPhoneBook } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchPhoneBook());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        marginLeft: 300,
        fontSize: 40,
        color: '#010101',
      }}
    >
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>

      {/* <ContactForm />
      <Filter />
      <ContactList /> */}
    </div>
  );
};
