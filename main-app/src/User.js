import React from 'react';


const User = (props) => {


    const {name, surname} = props.user;

        return (
                <div className="user">{name}<span> </span>{surname}</div>
        );

};

export default User;