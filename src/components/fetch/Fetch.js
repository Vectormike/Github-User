import React, {Component} from 'react';

class Fetch extends Component {
    constructor(){
        super();
        this.state = {
            avatar: '',
            repo: '',
        };
    }
    componentWillMount() {
            fetch('https://api.github.com/users')
            .then(results => results.json())
            console.log(results)
            .then(data =>  
                  
        }    
}

export default Fetch;