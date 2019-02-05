import React from 'react';


const Card = ({userID}) => {
    const {id, name, followers, location} = userID;
    return (
        <div className=" bg-light-red dib grow br3 ma  shadow-2">
            <img className="br4 ma3" alt={`Avatar`} src={`https://avatars0.githubusercontent.com/u/${id}?v=4`}/>
            <hr className="mw3 bb bw1 b--black-30"/>
            <div className="tc">
                <h3 className="f3">Name: {name}</h3>
                <h3 className="f3">Followers: {followers}</h3>
                <h3 className="f3">Location: {location}</h3>
            </div>
        </div>
    );
}

export default Card;