import React from 'react';
import User from './User';


const UsersList = (props) => {


    if (props.users.length === 1) {
        return (
            <div>
                {props.users.map( user =>
                    <User
                        key={user.id}
                        user={user}
                        name={props.name}
                        surname={props.surname}
                    />
                )}
            </div>
        )
    } else {
        return (
            <p>Brak wyników szukania !</p>
        )
    }
};

export default UsersList;