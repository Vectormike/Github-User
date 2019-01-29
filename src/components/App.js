import React, { Component } from 'react';
import Search from './search/Search';

class App extends Component {
    constructor() {
        super()


        this.state = {
            user: [],
            searchField: ''
        }
    }


    componentDidMount() {
        // fetch('https://api.github.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({users:users}))   


        //Fetch API as a function with a parameter
        const fetchAPI = (username) => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(user => this.setState({user:user}))
        } 
        fetchAPI(``)
             
    }
    //Set current state when searched
    onSearch = (event) => {
        console.log(event.target.value)
        this.setState({searchField:event.target.value})
    }

    render() {
        return(
            <div>
            <Search searchChange= {this.onSearch}/>
            </div>
        );
}

}

export default App;