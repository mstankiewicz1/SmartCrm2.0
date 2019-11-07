import React from 'react';
import './App.css';
import UsersList from './UsersList';



const allUsers = ['Marek', 'Ania', 'Joanna', 'Bartosz', 'Michał'];

class App extends React.Component {



    state = {
      filteredUsers: allUsers
    };



    filterUsers = (e) => {
        const text = e.target.value;
        const filteredUsers = this.getFilteredUsersForText(text);
        this.setState({
            filteredUsers
        })
    };

    getFilteredUsersForText = (text) => {
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
    };


    render() {
        return (
            <div>
                <h1>SmartCrm2.0 działa !</h1>
                <input onChange={this.filterUsers}/>
                <UsersList users={this.state.filteredUsers}/>
            </div>
        )
    }
}


export default App;
