import React from 'react';


const User = (props) => {




    const {name, surname} = props.user;

        return (
            <div>
                <p>{name}<span> </span>{surname}</p>
            </div>
        )
};

export default User;