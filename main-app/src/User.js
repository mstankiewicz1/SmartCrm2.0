import React from 'react';


const User = (props) => {



    const {name, surname, id} = props.user;

        return (
            <div>
                <div onClick={() => props.current(id)}>{name}<span> </span>{surname}</div>
            </div>
        )
};

export default User;