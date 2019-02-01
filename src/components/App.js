import React, { Component } from 'react';
import Search from './Search';
import Card from './Card';
import Footer from './Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: {},
            searchField: ''
        };
    }


    componentDidMount() {
        //Fetch API with a parameter
        const getUser = (username) => {
            fetch('https://api.github.com/users/${username}')
            .then(response => response.json())
            .then(response => {
                console.log(response);
              return response})      
        }
             
    }
    //Set current state when searched
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        
        //Allow user to search to allow filtering
        const filteredUser = this.state.users.filter(user => {
            return user.login.toLowerCase().includes(this.state.searchField)
        })
        
        return(
            <div className="tc">
            <Search searchChange={this.onSearchChange}/>
            <Card user={filteredUser}/>
            <Footer/>
            </div>
        );
}

}

export default App;