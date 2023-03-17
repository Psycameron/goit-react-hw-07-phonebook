import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getError,
  getFilteredContacts,
  getIsLoading,
} from 'redux/selectors';

import { deleteContact, fetchPhoneBook } from 'redux/operations';
import { useEffect } from 'react';

// import PropTypes from 'prop-types';

import css from './ContactList.module.css';

export const ContactList = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { items } = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoneBook());
  }, [dispatch]);

  const filteredContacts = useSelector(getFilteredContacts);

  const getVisibleContacts = () =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(filteredContacts.toLowerCase().trim())
    );

  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {items.length < 1 ? (
        <p>Add your first contact</p>
      ) : (
        <ul className={css.list}>
          {getVisibleContacts().map(({ id, name, phone }) => {
            return (
              <li className={css.listItem} key={id}>
                <span className={css.listName}>{name}:</span>
                <span className={css.listNumber}>{phone}</span>
                <button
                  className={css.listButton}
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
