import React, { Component } from 'react';
import Search from './Search';
import Card from './Card';
import Header from './Header';
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
        this.getUser('vectormike40');
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
    onKeyPress = (event) => {
		if(event.keyCode === 13 || event.charCode ===13) {
			this.setState({searchField: event.target.value})
			this.getUser(event.target.value)
		}
	}        

    render() {    
        return(
			<div className="tc">
				<Header/>
				<Search keyPress={this.onKeyPress} search={this.state.searchField}/>
				<Card userID={this.state.user}/>
                <Footer/>
            </div>
        );
}

}

export default App;