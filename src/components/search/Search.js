import React from 'react';

const Search = ({searchChange}) => {
    return (
        <div className="pa3 ma3 br3 b bg-light-blue">
            <input
            className='' 
            name='search' 
            placeholder='Search for a Github user'
            type='search'
            onChange={searchChange}
            />
        </div>
    )
}

 export default Search