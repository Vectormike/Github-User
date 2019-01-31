import React, { Component } from 'react';
import Search from './search/Search';
import Card from './Card';
import Footer from './Footer';

class App extends Component {
    constructor() {
        super()


        this.state = {
            user: [],
            searchField: ''
        }
    }


    componentDidMount() {
        //Fetch API with a parameter
        let url = `https://api.github.com/users`;
        fetch(url)
            .then(response => response.json())
            .then(userID => this.setState({
                user : userID
            }))      
            console.log(this.state.user)  
    }
    //Set current state when searched
    onSearch = (event) => {
        this.setState({searchField:event.target.value})
    }

    render() {
        
        //Allow user to search to allow filtering
        const filteredUser = this.state.user.filter(user => {
            return user.login.toLowerCase().includes(this.state.searchField)
        })
        
        return(
            <div>
            <Search searchChange= {this.onSearch}/>
            <Card user={filteredUser}/>
            <Footer/>
            </div>
        );
}

}

export default App;