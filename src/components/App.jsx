import { Component } from "react";
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { FilterContacts } from "./filter/FilterContacts";
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
    let arraysOfName=[];
    this.state.contacts.map(element=> (
      arraysOfName.push(element.name) 
      ));
    (!arraysOfName.includes(contact.name))
    ?(this.setState(prevState=> ({contacts: [...prevState.contacts, contact]})))
    :(alert(`${contact.name} is alredy in contacts`)) 
  }

  deleteContact=(id) =>{
    this.setState(prevState=>({contacts: prevState.contacts.filter(contact=> contact.id!==id)}))
  }

  searchByName =(name)=> {
    this.setState(({filter: name.toLowerCase()}))
  }

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    )};

  render () {
    return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm addContact={this.addContact}/>
      <h2>Contacts</h2>
      <FilterContacts searchByName={this.searchByName}/>
      <ContactList contacts={this.getVisibleContacts()} deleteContact={this.deleteContact}/> 
    </Layout>
  );
}
};
