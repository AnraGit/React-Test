import React, { Component } from 'react'

export default class UserForm extends Component{
  render(){
    return ( 
      <form onSubmit={this.props.onAddUser}>
          <input type="text" placeholder="name" name="name" />
          <input type="email" placeholder="email" name="email" />
          <input type="submit" value="Save" />
      </form>
    );
  }
}