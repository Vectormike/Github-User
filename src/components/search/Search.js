import React, {Component} from 'react';
import {Form, FormGroup, Button, Input} from 'reactstrap';

class Search extends Component {

    render() {
        return (
            <div className="searchDiv">
                <Form className="searchForm">
                    <FormGroup>
                        <div className="col-md-4">
                            <Input type="search" name="search" id="search" placeholder="Search"/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="col-md-8">
                            <Button outline color="info">Search</Button>{' '}
                        </div>
                    </FormGroup>       
                </Form>
            </div>            
        )
    } 
}
 export default Search