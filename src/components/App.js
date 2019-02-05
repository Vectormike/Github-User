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
        this.getUser('default');
    }
        //Fetch API with a parameter
        getUser = (username) => {
            fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(userInfo => this.setState({user: {
                id: userInfo.id,
                name: userInfo.name,
                followers: userInfo.followers,
                location: userInfo.location}
            })     
        )}
            
    //Set current state when searched
    onSearchChange = (event) => {
        console.log(event.target.value)
        this.setState({searchField: event.target.value})
        this.getUser(event.target.value);
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