import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from '../Form/Form';

import css from './App.module.css';


export const App = () => {

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter name="filter" />
      <ContactList />
    </div>
  );
};
