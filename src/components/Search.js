import React from 'react';

const Search = ({searchChange}) => {
    return (
        <div>
            <input 
                className='bg-light-blue br4 ma4 pa1 tc' 
                type='search' 
                placeholder='Search User' 
                onChange={searchChange}
                />
        </div>
    )
}

export default Search;