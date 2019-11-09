import React from 'react';


const Search = (props) => {


    return (
        <div className="search">
           <input type="search" placeholder="Wpisz numer pesel" onChange={props.change}/>
        </div>
    )
};


export default Search;