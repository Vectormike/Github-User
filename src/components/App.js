import React, { Component } from 'react';
import Search from './search/Search';

class App extends Component {
    constructor() {
        super()


        this.state = {
            users: [],
            searchField: ''
        }
    }


    componentDidMount() {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(users => this.setState({users:users}))   
                      
    }

    onSearch = (event) => {
        console.log(event.target.value)
    }

    render() {
        return(
            <div>
            <Search/>
            </div>
        );
}

}

export default App;