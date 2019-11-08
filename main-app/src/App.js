import React from 'react';
import './App.css';
import UsersList from './UsersList';
import Search from './Search';



const allUsers = [{
                    id: 0,
                    name: 'Marek',
                    surname: 'Stankiewicz'
                    },
                    {
                    id: 1,
                    name: 'Joanna',
                    surname: 'Nowak'
                    },
                    {
                    id: 2,
                    name: 'Bartosz',
                    surname: 'Lubomirski'
                    },
                    {
                    id: 3,
                    name: 'Agnieszka',
                    surname: 'Marianowska'
                    },
                ];

class App extends React.Component {



    state = {
      filteredUsers: allUsers
    };



    filterUsers = (e) => {
        e.preventDefault();
        const name = e.target.value;
        const filteredUsers = allUsers.filter(function (user) {
            return user.name.toLowerCase().includes(name.toLowerCase());
        });
        this.setState({
            filteredUsers
        });
    };


    render() {
        return (
            <div>
                <h1>SmartCrm2.0 działa !</h1>
                <Search change={this.filterUsers}/>
                <UsersList users={this.state.filteredUsers}/>
            </div>
        )
    }
}


export default App;
