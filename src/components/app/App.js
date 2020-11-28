import React from 'react';
import Header from"../header/Header";
import Nav from"../nav/Nav";
import Main from"../main/Main";
import Footer from"../footer/Footer";

import "../Fontawesome";
import Container from 'react-bootstrap/Container';



class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {search: " " } 
    }

    handleSearchChange = (search) => {
        this.setState({search: search})
    }
    


    render(){
        return(
            <Container> 
                <div className="app">
                    <Header/>
                    <Nav onSearchInput={this.handleSearchChange}/>
                    <Main search={this.state.search}/>
                    <Footer/>              
                </div>
            </Container>
    
        )

    }

}

export default App;