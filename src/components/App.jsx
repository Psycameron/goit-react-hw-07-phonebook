import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  return (
    <div
      style={{
        marginLeft: 300,
        fontSize: 30,
        color: '#010101',
      }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
