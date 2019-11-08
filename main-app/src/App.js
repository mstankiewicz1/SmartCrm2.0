import React from 'react';
import './App.css';
import UsersList from './UsersList';
import Search from './Search';



const allUsers = [{
                    id: 0,
                    name: 'Marek',
                    surname: 'Stankiewicz',
                    pesel: 86032416316
                    },
                    {
                    id: 1,
                    name: 'Joanna',
                    surname: 'Nowak',
                    pesel: 12345678901
                    },
                    {
                    id: 2,
                    name: 'Bartosz',
                    surname: 'Lubomirski',
                    pesel: 23456789012
                    },
                    {
                    id: 3,
                    name: 'Agnieszka',
                    surname: 'Marianowska',
                    pesel: 34567890123
                    },
                    {
                    id: 4,
                    name: 'Julia',
                    surname: 'Rzeszowska',
                    pesel: 45678901234
                    },
                ];

class App extends React.Component {



    state = {
      filteredUsers: allUsers
    };



    filterUsers = (e) => {
        e.preventDefault();
        const pesel = e.target.value;
        const filteredUsers = allUsers.filter(function (user) {
            return user.pesel === parseInt(pesel);
        });
        if (pesel.length === 11) {
            this.setState({
                filteredUsers
            });
        }
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
