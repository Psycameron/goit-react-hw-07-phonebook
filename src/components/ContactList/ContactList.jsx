import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilteredContacts } from 'redux/slice';

// import PropTypes from 'prop-types';

import css from './ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteredContacts.toLowerCase())
    );

  return (
    <>
      {contacts.length < 1 ? (
        <p>Add your first contact</p>
      ) : (
        <ul className={css.list}>
          {getVisibleContacts().map(({ id, name, number }) => {
            return (
              <li className={css.list__item} key={id}>
                <span className={css.list__name}>{name}:</span>
                <span className={css.list__number}>{number}</span>
                <button
                  className={css.list__button}
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
}

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
