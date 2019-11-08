import React from 'react';


const Search = (props) => {


    return (
        <div>
           <input type="search" placeholder="Wyszukaj po nazwisku" onChange={props.change}/>
        </div>
    )
};


export default Search;