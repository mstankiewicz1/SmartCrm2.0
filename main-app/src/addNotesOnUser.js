import React from 'react';


class AddNotesOnUser extends React.Component {

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
            <div className="notesAndPreferencesUser">
                <div className="PrivateNotesArea">
                                <textarea className="textAreaNotes" rows="10" cols="25" placeholder="Wpisz prywatna notatkę">
                                </textarea>
                    <button className="addPrivateNotesButton">Dodaj notatkę</button>
                </div>
            </div>
        )
    }
}

export default AddNotesOnUser;