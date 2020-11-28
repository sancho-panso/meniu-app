import './nav.scss';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';


class Nav extends Component{ 

    constructor(props) {
        super(props);
        this.state = {search:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {this.setState({search: event.target.value});  }
      handleSubmit(event) {
        this.props.onSearchInput(this.state.search)  
        console.log('test: ' + this.state.search);
        event.preventDefault();
      }
    

    render(){
        return(
            <nav>
                <Container>
                    <Navbar className="bg-light justify-content-between" md={{ span: 4, offset: 8 }}>
                        <Form inline onSubmit={this.handleSubmit} >
                            <FormControl type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search" className=" mr-sm-2" />
                            <Button type="submit" variant="primary"><FontAwesomeIcon icon="search"/></Button>
                        </Form>
                    </Navbar>
                </Container>
             </nav>
             
        )
    }
 }

 export default Nav;