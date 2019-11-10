import React from 'react';


const Search = (props) => {


    return (
        <div className="mainContainer">
            <div className="crmName">
                <p>CRM</p>
            </div>
            <div className="searchContainer">
                   <input  className="search" type="search" placeholder="Wpisz numer pesel" onChange={props.change}/>
            </div>
            <div className="logSection">
                <p>Logowanie</p>
            </div>
        </div>
    )
};


export default Search;