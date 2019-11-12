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
            [e.target.name]: e.target.value,
        };
        this.setState({
          user: newUser
        })
    };




    render(){
        return (
            <div className="addUserForm">
                <form onSubmit={this.addNewUser}>
                    <input name="name" type="text" placeholder="Wpisz imię" value={this.state.user.name}
                        onChange={this.handleChange}/>
                    <input name="surname" type="text" placeholder="Wpisz nazwisko" value={this.state.user.surname}
                        onChange={this.handleChange}/>
                    <input name="pesel" type="number" placeholder="Wpisz pesel" value={this.state.user.pesel}
                        onChange={this.handleChange}/>
                    <input name="mobilePhone" type="number" placeholder="Wpisz numer telefonu komórkowego" value={this.state.user.mobilePhone}
                        onChange={this.handleChange}/>
                    <input name="landlinePhone" type="number" placeholder="Wpisz numer telefonu stacjonarnego" value={this.state.user.landlinePhone}
                        onChange={this.handleChange}/>
                    <input name="email" type="email" placeholder="Wpisz adres email" value={this.state.user.email}
                        onChange={this.handleChange}/>
                    <button type="submit">Dodaj</button>
                </form>
            </div>
        )
    }
}

export default AddUser;