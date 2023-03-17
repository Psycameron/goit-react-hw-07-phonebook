// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { onFilter } from 'redux/slice';

import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Contacts</h2>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          onChange={e => {
            return dispatch(onFilter(e.target.value));
          }}
        />
      </label>
    </>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
