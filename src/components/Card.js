import React from 'react';


const Card = ({id, name, followers, location}) => {
    return (
        <div className="">
            <img alt={`Avatar`} src={`https://avatars0.githubusercontent.com/u/${id}?v=4`}/>
            <hr/>
            <div>
                <h3 className="f2">{name}</h3>
                <h3 className="f2">{followers}</h3>
                <h3 className="f2">{location}</h3>
            </div>
        </div>
    );
}

export default Card;