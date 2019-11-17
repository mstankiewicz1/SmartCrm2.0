import React from 'react';

class Notes extends React.Component {

    state = {
        text: '',
    };


    handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    };


    handleClick = () => {

        const {text} = this.state;

        if (text.length > 5) {
            const add = this.props.add(text);
            if (add) {
                this.setState({
                    text: '',
                })
            }
        } else {
            alert("Notatka powinna zawierać przynajmniej 5 znaków");
        }
    };

    render() {
        return (
            <div className="form">
                <input type="text" placeholder="Wpisz prywatną notatkę" value={this.state.text} onChange={this.handleText}/>
                <button className="addButton" onClick={this.handleClick}>Dodaj notatkę</button>
            </div>
        );
    }
}

export default Notes;