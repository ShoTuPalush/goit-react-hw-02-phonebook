import { GlobalStyled } from './GlobalStyle';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onInput = evt => {
    this.setState({ name: evt.target.value });
  };

  onAdd = evt => {
    evt.preventDefault();
    const contact = {
      contacts: [
        ...this.state.contacts,
        { id: nanoid(), name: this.state.name },
      ],
      name: '',
    };
    this.setState(contact);
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <GlobalStyled />
        <h1>Phonebook</h1>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onInput}
            required
          />
        </label>
        <button type="submit" onClick={this.onAdd}>
          Add contact
        </button>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
