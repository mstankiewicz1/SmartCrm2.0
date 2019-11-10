import React from 'react';
import User from './User';


const UsersList = (props) => {


    if (props.users.length === 1) {
        return (
            <div className="usersList">
                {props.users.map( user =>
                    <User
                        key={user.id}
                        user={user}
                        name={props.name}
                        surname={props.surname}
                        pesel={props.pesel}
                        mobilePhone={props.mobilePhone}
                        landlinePhone={props.landlinePhone}
                        email={props.email}
                    />
                )}
            </div>
        )
    } else {
        return null
    }
};

export default UsersList;