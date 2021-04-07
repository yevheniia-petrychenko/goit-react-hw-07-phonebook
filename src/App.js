import { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Spiner from './components/spiner/spiner';
import Filter from './components/Filter/Filter';
import { fetchContact } from './operations/operations';
import { getIsLoading } from './selectors/selectors';

class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  // formSubmitHandl = ({ name, number }) => {
  //   let newname = name;
  //   let found = false;
  //   this.state.contacts.forEach(({ name }) => {
  //     if (newname.toLowerCase() === name.toLowerCase()) {
  //       alert(`${name} is already in contacts`);
  //       found = true;
  //       return;
  //     }
  //     if (found) {
  //       return;
  //     }
  //   });
  //   if (found) {
  //     return;
  //   }
  // this.setState(prevState => {
  //   return {
  //     contacts: [
  //       ...prevState.contacts,
  //       ...[{ name: newname, number: number, id: uuidv4() }],
  //     ],
  //   };
  // });
  // };

  // getVisibleContact = () => {
  //   const normalizedFilter = this.state.filter.toLowerCase();
  //   return this.state.contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // filterHandle = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };

  // deleteContact = id => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(contact => contact.id !== id),
  //     };
  //   });
  // };

  componentDidMount() {
    this.props.fetchContact();
  }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <div className="Container">
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {this.props.isLoading && <Spiner />}
      </div>
    );
  }
}

const mapStateToPops = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => {
    dispatch(fetchContact());
  },
});

export default connect(mapStateToPops, mapDispatchToProps)(App);
