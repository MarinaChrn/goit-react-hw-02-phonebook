import { Component } from "react";
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { Layout } from "./GlobalStyles.styled";


export class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter:'',
  }

  addContact = (contact) =>{
    let permit = false;
    this.state.contacts.map(element=> (
      (element.name!==contact.name)?(permit=true):(permit=false)
    ));
    if (permit===true) {
      this.setState(prevState=> ({contacts: [...prevState.contacts, contact]}))
    } else {
      alert(`${contact.name} is alredy in contacts`)
    }
  }

  render () {
    console.log(this.state.contacts)
    return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm addContact={this.addContact}/>
      <h2>Contacts</h2>
      <ContactList contacts={this.state.contacts} />
    </Layout>
  );
}
};
