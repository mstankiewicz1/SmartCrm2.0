import React from 'react';
import { Link } from 'react-router-dom';


const Search = (props) => {


    return (
        <div className="mainContainer">
            <div className="crmName">
                <p>CRM</p>
            </div>
            <div className="searchContainer">
                   <input  className="search" type="search" maxLength="11" placeholder="Wpisz numer pesel" onChange={props.change}/>
            </div>
            <div className="logSection">
                <p>Logowanie</p>
            </div>
            <Link to="/Issues"><button>Sprawy</button></Link>
            <Link to="/Contact"><button>Kontakty</button></Link>
        </div>
    )
};


export default Search;