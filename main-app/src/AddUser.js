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




    render(){
        return (
            <div className="addUserForm">
                <form onSubmit={this.addNewUser}>
                    <input className="name" type="text" placeholder="Wpisz imię" value={this.state.user.name}/>
                    <input className="surname" type="text" placeholder="Wpisz nazwisko" value={this.state.user.surname}/>
                    <input className="pesel" type="number" placeholder="Wpisz pesel" value={this.state.user.pesel}/>
                    <input className="mobilePhone" type="number" placeholder="Wpisz numer telefonu komórkowego" value={this.state.user.mobilePhone}/>
                    <input className="landlinePhone" type="number" placeholder="Wpisz numer telefonu stacjonarnego" value={this.state.user.landlinePhone}/>
                    <input className="email" type="email" placeholder="Wpisz adres email" value={this.state.user.email}/>
                    <button type="submit">Dodaj</button>
                </form>
            </div>
        )
    }
}

export default AddUser;