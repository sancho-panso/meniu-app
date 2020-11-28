
import React, { Component } from 'react';


class Forms extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
       // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      //handleChange(event) {this.setState({value: event.target.value});  }
      handleSubmit(event) {
        this.setState({value: event.target.value});
        console.log('Vardas: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Vardas:
              <input type="text" value={this.state.value} /*onChange={this.handleChange}*/ />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

 export default Forms;