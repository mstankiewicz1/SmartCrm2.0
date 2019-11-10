import React from 'react';


const User = (props) => {


    const {name, surname, pesel, mobilePhone} = props.user;

        return (
                    <div>
                        <div className="user">{name}<span> </span>{surname}</div>
                        <div>{pesel}</div>
                        <div>{mobilePhone}</div>
                    </div>
        );

};

export default User;