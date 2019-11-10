import React from 'react';
import './css/style.css';
import UsersList from './UsersList';
import Search from './Search';



const allUsers = [{
                    id: 0,
                    name: 'Marek',
                    surname: 'Stankiewicz',
                    pesel: 86032416316,
                    mobilePhone: 123456789,
                    landlinePhone: 221234567,
                    email: 'zxcccv@gmail.com',
                    numberAccount: 1234568,
                    },
                    {
                    id: 1,
                    name: 'Joanna',
                    surname: 'Nowak',
                    pesel: 12345678901,
                    mobilePhone: 234567890,
                    landlinePhone: 222345678,
                    email: 'bdfbbd@gmail.com',
                    numberAccount: 23456789,
                    },
                    {
                    id: 2,
                    name: 'Bartosz',
                    surname: 'Lubomirski',
                    pesel: 23456789012,
                    mobilePhone: 345678901,
                    landlinePhone: 223456789,
                    email: 'gergdfg@gmail.com',
                    numberAccount: 34567890,
                    },
                    {
                    id: 3,
                    name: 'Agnieszka',
                    surname: 'Marianowska',
                    pesel: 34567890123,
                    mobilePhone: 456789012,
                    landlinePhone: 224567890,
                    email: 'nnin@gmail.com',
                    numberAccount: 45678901,
                    },
                    {
                    id: 4,
                    name: 'Julia',
                    surname: 'Rzeszowska',
                    pesel: 45678901234,
                    mobilePhone: 567890123,
                    landlinePhone: 225678901,
                    email: 'hdgfgfdgfdcv@gmail.com',
                    numberAccount: 56789012,
                    },
                ];

class App extends React.Component {



    state = {
      filteredUsers: allUsers,
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

    deleteUser = () => {
      this.setState({
          filteredUsers: []
      })
    };


    render() {
        return (
            <div className="app">
                    <Search change={this.filterUsers}/>
                    <div className="dataPerson">
                        <p className="headerOwner">Właściciel</p>
                    </div>
                    <div className="dataContact">
                        <p className="headerContactData">Dane kontaktowe</p>
                    </div>
                    <div className="AccountingNumbers">
                        <p className="headerAccountingNumbers">Numery rachunków</p>
                    </div>
                        <UsersList users={this.state.filteredUsers} delete={this.deleteUser}/>
            </div>
        )
    }
}


export default App;
