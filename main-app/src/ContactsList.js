import React from 'react';
import SingleContact from './SingleContact';

const ContactsList = (props) => {


    const active = props.listContacts.filter(singleContact => singleContact.active);
    const done = props.listContacts.filter(singleContact => !singleContact.active);

    const contactsActive = active.map(singleContact =>
        <SingleContact
            key={singleContact.id}
            singleContact={singleContact}
            change={props.change}
        />
    );

    const contactsDone = done.map(singleContact =>
        <SingleContact
            key={singleContact.id}
            singleContact={singleContact}
            change={props.change}
        />
    );

    return (
        <div className="contactsList">
            <div className="active">
                <h4>Kontakty w toku<em>({active.length})</em></h4>
                {contactsActive.length > 0  ? contactsActive : <p className="communicateNoContacts">Brak kontaktów</p>}
            </div>


            <div className="done">
                <h4>Kontakty zakończone <em>({done.length})</em></h4>
                {contactsDone}
            </div>
        </div>
    )
};

export default ContactsList;