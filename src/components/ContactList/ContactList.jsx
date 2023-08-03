import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { getContacts, getError, getIsLoading } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { fetchContacts } from 'redux/operations';


export const ContactList = () => {

  
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {isLoading && <div>Is loading...</div>}
      {error && <div>Something go wrong:( Please, try letter</div>}
      {visibleContacts?.map(contact => {
        return (
          <ContactListItem
            key={contact.name}
            {...contact}        
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  deleteHandle: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
};
