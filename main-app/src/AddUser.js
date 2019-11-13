{/*import React from 'react';


class AddUser extends React.Component {

    state = {
            name: "",
            surname: "",
            pesel: "",
            mobilePhone: "",
            landlinePhone: "",
            email: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    addNewUser = () => {

        const {name, surname, pesel, mobilePhone, landlinePhone, email } = this.state;

        const add = this.props.add(name, surname, pesel, mobilePhone, landlinePhone, email);
        if (add){
            this.setState({
                name: "",
                surname: "",
                pesel: "",
                mobilePhone: "",
                landlinePhone: "",
                email: "",
            })
        } else {
            return null;
        }
    };


    render(){
        return (
            <div className="addUserForm">
                    <input name="name" type="text" className="nameNewUser" placeholder="Wpisz imię" value={this.state.name}
                        onChange={this.handleChange}/>
                    <input name="surname" type="text" className="surnameNewUser" placeholder="Wpisz nazwisko" value={this.state.surname}
                        onChange={this.handleChange}/>
                    <input name="pesel" type="number" className="peselNewUser" placeholder="Wpisz pesel" value={this.state.pesel}
                        onChange={this.handleChange}/>
                    <input name="mobilePhone" type="number" className="mobilePhoneNewUser" placeholder="Wpisz numer telefonu komórkowego" value={this.state.mobilePhone}
                        onChange={this.handleChange}/>
                    <input name="landlinePhone" type="number" className="landlinePhoneNewUser" placeholder="Wpisz numer telefonu stacjonarnego" value={this.state.landlinePhone}
                        onChange={this.handleChange}/>
                    <input name="email" type="email" className="emailNewUser" placeholder="Wpisz adres email" value={this.state.email}
                        onChange={this.handleChange}/>
                    <button onClick={this.addNewUser} type="submit">Dodaj</button>
            </div>
        )
    }
}

export default AddUser;*/}