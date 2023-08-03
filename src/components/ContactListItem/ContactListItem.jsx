import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getIsLoading } from 'redux/contactsSlice';
import { deleteContact } from 'redux/operations';
import css from './ContactListItem.module.css';


export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  return (
    <li>
      <p className={css.contactInfo}>
        <span className={css.contactName}>{name}</span>: {phone}
      </p>
      <button
        disabled={isLoading}
        type="button"
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  deleteHandle: PropTypes.func,
  number: PropTypes.number,
  name: PropTypes.string,
  contactId: PropTypes.string,
};
