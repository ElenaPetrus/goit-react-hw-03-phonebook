import React, { Component } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/FIlter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import s from './App.module.css';
import shortid from 'shortid';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log(prevState);
    // console.log(this.state);
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  // operator объединение с null https://learn.javascript.ru/nullish-coalescing-operator
  componentDidMount = () => {
    const newContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: newContacts ?? initialState });
  };

  //   componentDidMount =()=>{
  //    const contacts =JSON.parse( localStorage.getItem('contacts'))
  //  console.log(contacts);
  //  if (contacts!==null){
  //    this.setState({
  //      contacts
  //    })
  //  }
  //}

  // // не очень хороший вариант
  //   componentDidUpdate() {
  //     if (
  //       this.getVisibleContacts().length === 0 &&
  //       this.state.contacts.length > 0
  //     )
  //       alert("Соntact is not on the ContactList");
  //   }

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number,
    )
      ? alert(`${contact.name} witn ${contact.number} is already in Contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  //

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const totalContactCount = contacts.length;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <span> Total contacts: {totalContactCount}</span>

        <ContactForm onSubmit={this.addContact} />

        <h2 className={s.title}>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
