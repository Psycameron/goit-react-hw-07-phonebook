import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export function App() {
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
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
