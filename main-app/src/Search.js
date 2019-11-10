import React from 'react';


const Search = (props) => {


    return (
        <div className="mainContainer">
            <div className="searchContainer">
                   <input  className="search" type="search" placeholder="Wpisz numer pesel" onChange={props.change}/>
            </div>
        </div>
    )
};


export default Search;