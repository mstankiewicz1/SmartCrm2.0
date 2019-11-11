import React from 'react';


class AddUser extends React.Component {

    state = {
        user: {
            name: "",
            surname: "",
            pesel: "",
            mobilePhone: "",
            landlinePhone: "",
            email: ""
        }
    };

    handleChange = (e) => {

        let newUser;

        newUser = {
            ...this.state.user,
            [e.target.name]: e.target.value
        };
        this.setState({
            user: newUser
        })
    };

    addNewUser = (e) => {

        e.preventDefault();


    };





    render(){
        return (
            <div className="addUserForm">
                <form onSubmit={this.addNewUser}>
                    <input className="name" type="text" placeholder="Wpisz imię" value={this.state.user.name}
                           onChange={this.handleChange}/>
                    <input className="surname" type="text" placeholder="Wpisz nazwisko" value={this.state.user.surname}
                           onChange={this.handleChange}/>
                    <input className="pesel" type="number" placeholder="Wpisz pesel" value={this.state.user.pesel}
                           onChange={this.handleChange}/>
                    <input className="mobilePhone" type="number" placeholder="Wpisz numer telefonu komórkowego" value={this.state.user.mobilePhone}
                           onChange={this.handleChange}/>
                    <input className="landlinePhone" type="number" placeholder="Wpisz numer telefonu stacjonarnego" value={this.state.user.landlinePhone}
                           onChange={this.handleChange}/>
                    <input className="email" type="email" placeholder="Wpisz adres email" value={this.state.user.email}
                           onChange={this.handleChange}/>
                    <button>Dodaj</button>
                </form>
            </div>
        )
    }
}

export default AddUser;