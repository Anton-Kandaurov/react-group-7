import { Component } from "react";
import { data } from '../data/users';
import { UsersList } from './Users/Users';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    users: data
  };

  deleteUser = (userId) => {
    this.setState(prevState => ({
      users: prevState.users.filter
        (({ id }) => id !== userId), }));
  };

  addUser = (userData) => {
    const newUser = {
      id: nanoid(),
      ...userData,
    }
    
    this.setState(prevState => ({users: [newUser, ...prevState.user]}))
  };

  render() {
    const { users } = this.state;
  return (
    <div>
      <UsersList users={users} deleteUser={this.deleteUser} />
      <AddUserForm addUserProps={this.addUser} />
    </div>
  );
}
    
  
}
 