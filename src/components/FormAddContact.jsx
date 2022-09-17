import { Component } from "react";

export default class FormAddContact extends Component {
    state = {
        name: '',
        number: '',
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, number } = this.state;
        console.log(this.props)
        this.props.onSubmit({ name, number });
        this.setState({
            name: " ",
            number: " ",
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    render() {
        const { name, number } = this.state;
        return (
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
            <label>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.handleChange}
                />
            </label>
            <button type="submit">Add contact</button>
          </form>
        )
    }
}