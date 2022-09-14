import { Component } from "react";
import Section from "./Section/Section";

export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const { name } = this.state;
    // this.props.onSubmit({ ...this.state });
    this.setState({
      name: ''
    })
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  render() {
    const { name } = this.state;
     return (
      <>
        <Section title="Phonebook">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value = {name}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts">
        
        </Section>
      </>
    )
  }
};
