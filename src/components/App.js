import React, { Component } from 'react';
import Search from './search/Search';
import Card from './Card';

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
            .then(userID => this.setState({
                user : {
                    id: userID.id,
                    name: userID.name,
                    followers: userID.followers,
                    location: userID.location
                }
            }))
        } 
        fetchAPI(`Vectormike40`)
             
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
            <Card />
            </div>
        );
}

}

export default App;