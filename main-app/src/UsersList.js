import React from 'react';


const UsersList = (props) => {


    if (props.users.length === 1) {
        return (
            <div>
                {props.users.map( user =>
                    <li key={user.id}>
                        {user.name}
                        {user.surname}
                    </li>
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