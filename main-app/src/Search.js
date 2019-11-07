import React from 'react';


const Search = (props) => {


    return (
        <div>
           <input onChange={props.change}/>
        </div>
    )
};


export default Search;