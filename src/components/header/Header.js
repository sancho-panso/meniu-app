import './header.scss';
import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';


class Header extends Component{ 

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
                <Container>
                    <div>
                        <h1>Cuisine search site</h1>
                    </div>
                </Container>            
        )
    }
 }

 export default Header;