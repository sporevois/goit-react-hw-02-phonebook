import { Component } from "react";
import { nanoid } from "nanoid";
import Section from "./Section/Section";
import FormAddContact from "./FormAddContact";
import ContatList from "./ContactList";

export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  addContact = (contact) => {
    this.setState((prevState) => {
      const newContact = {
          id: nanoid(),
          ...contact
      }
      return {
        contacts: [...prevState.contacts, newContact]
        
      }
    })
  }

  render() {
    const { contacts } = this.state;
     return (
      <>
        <Section title="Phonebook">
          <FormAddContact onSubmit={this.addContact}/>
        </Section>
        <Section title="Contacts">
           <ContatList contacts={contacts}/>
        </Section>
      </>
    )
  }
};
