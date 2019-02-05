import React, { Component } from 'react';
import Search from './Search';
import Card from './Card';
import Footer from './Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            searchField: ''
        };
    }


    componentDidMount() {
        //Fetch API with a parameter
        const getUser = (username) => {
            fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(userInfo => this.setState({user: {
                id: userInfo.id,
                name: userInfo.name,
                followers: userInfo.followers,
                location: userInfo.location}
            })     
        )}
        getUser(`vectormike40`)
    }
    //Set current state when searched
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        
        //Allow user to search to allow filtering
        
        
        return(
            <div className="tc">
            <Search searchChange={this.onSearchChange}/>
            <Card />
            <Footer/>
            </div>
        );
}

}

export default App;