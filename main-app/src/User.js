import React from 'react';


const User = (props) => {


    const {name, surname} = props.user;

        return (
                    <div>
                        <div className="user">{name}<span> </span>{surname}</div>
                    </div>
        );

};

export default User;