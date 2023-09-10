import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { FormTitle, Container } from '../components/Form/Form.styled';
import { GlobalStyle } from './GlobalStyle';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = newContact => {
    const doubleContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (doubleContact) {
      window.alert(`Contact with name '${newContact.name}' already exists!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };
  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  componentDidMount() {
    const contactsStart = localStorage.getItem('Contact');
    if (contactsStart !== null) {
      const parseContacts = JSON.parse(contactsStart);
      this.setState({
        contacts: parseContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('Contact', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <FormTitle>Phonebook</FormTitle>
        <ContactForm newContact={this.addContact} />
        <FormTitle>Contacts</FormTitle>
        <Filter changeFilter={this.changeFilter} value={this.state.filter} />
        <Contacts
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Container>
    );
  }
}
