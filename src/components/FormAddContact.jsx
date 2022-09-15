import { Component } from "react";

export default class FormAddContact extends Component {
    state = {
        name: "",
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { name } = this.state;
        console.log(this.props)
        this.props.onSubmit({ name });
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
        )
    }
}