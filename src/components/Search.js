import React from 'react';

const Search = ({keyPress, search}) => {
    return (
        <div>
            <input 
                className='bg-light-blue br4 ma3 pa tc' 
                type='search' 
                placeholder='Search User' 
                onKeyPress={keyPress}
            />
        </div>
    )
}

export default Search;