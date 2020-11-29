import'./main.scss'

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import React, {Component} from 'react';


class Main extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            dishesData:[],
            justLoad:true 
        }
    }




async componentDidUpdate(prevProps, prevState) {
        if(prevProps.search != this.props.search ){
            let path = this.props.search
            let res = await fetch("http://www.recipepuppy.com/api/?q=" + path)
            let data = await res.json()
            let dishes = data.results;
            this.setState({dishesData: dishes})
            this.setState({justLoad: false})
            console.log(this.state.dishesData);
        }
    
    }   

        
   render() {
    console.log(this.state.dishesData.length);
       let tableBody = <tr><td colSpan="4">Dear.. we are waiting for your request to serve your search data</td></tr>;
       if(this.state.dishesData.length != 0 && this.props.search.length !=0){
       tableBody = this.state.dishesData.map((item, index)=>
                   <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.ingredients}</td>
                    <td><img src={item.thumbnail} alt={this.props.search+" dish picture"}></img></td>
                   </tr> );  
       }else{
        if(!this.state.justLoad)tableBody = <tr><td colSpan="4">UPs.. no results for your search</td></tr>;
       }                               
        return(
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Title:</th>
                        <th>Ingredients</th>
                        <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </Table>
            </Container>
        )
       
    }
}


export default Main;

