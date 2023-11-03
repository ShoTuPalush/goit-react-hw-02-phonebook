import { GlobalStyled } from './GlobalStyle';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Field, Form } from 'formik';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onAdd = evt => {
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

  render() {
    const { contacts, name, number } = this.state;
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
                onChange={this.onInput}
                required
              />
            </label>

            <label>
              Number
              <Field
                name="number"
                type="tel"
                value={number}
                onChange={this.onInput}
                required
              />
            </label>

            <button type="submit">Add contact</button>
          </Form>
        </Formik>

        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
