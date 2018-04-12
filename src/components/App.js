import React, { Component } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import logo from '../assets/logo.svg';
import '../assets/app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, name: "test", email: "test@test.com"}
      ]
    };
  }

  handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React test</h2>
        </div>
        <div>
          <p><strong>Add Users</strong></p>
          <UserList users={this.state.users}  />
          <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
        </div>
      </div>
    );
  }
}
