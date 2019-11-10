import React from 'react';


const User = (props) => {


    const {name, surname, pesel, mobilePhone, landlinePhone, email} = props.user;

        return (
                    <div>
                        <div className="dataPersonFromProps">
                            <p className="nameAndSurname">
                                <span>{name}</span><span> </span><span>{surname}</span>
                            </p>
                            <p className="pesel">{pesel}</p>
                        </div>
                        <div className="dataContactFromProps">
                            <div>
                                <p className="mobilePhone">Telefon komórkowy: <span>{mobilePhone}</span></p>
                                <p className="landlinePhone">Telefon stacjonarny: <span>{landlinePhone}</span></p>
                                <p className="email">Email: <span>{email}</span></p>
                            </div>
                        </div>
                    </div>
        );

};

export default User;