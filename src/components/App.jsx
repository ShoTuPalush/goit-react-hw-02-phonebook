import { GlobalStyled } from './GlobalStyle';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Field, Form } from 'formik';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onInput = evt => {
    this.setState({ [evt.name]: evt.value });
  };

  onAdd = () => {
    const contact = {
      contacts: [
        ...this.state.contacts,
        { id: nanoid(), name: this.state.name, number: this.state.number },
      ],
      name: '',
      number: '',
    };
    this.setState(contact);
  };

  filter = () => {};

  render() {
    const { contacts, name, number, filter } = this.state;
    const visibleContacts = contacts.filter(contact => {
      const hasContact = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return hasContact;
    });
    return (
      <>
        <GlobalStyled />
        <h1>Phonebook</h1>

        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          onSubmit={() => this.onAdd()}
        >
          <Form>
            <label>
              Name
              <Field
                name="name"
                type="text"
                value={name}
                onChange={evt => this.onInput(evt.target)}
                required
              />
            </label>

            <label>
              Number
              <Field
                name="number"
                type="tel"
                value={number}
                onChange={evt => this.onInput(evt.target)}
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </Form>
        </Formik>

        <h2>Contacts</h2>

        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={evt => this.onInput(evt.target)}
        />

        {contacts.length > 0 && (
          <ul>
            {visibleContacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
