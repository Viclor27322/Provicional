import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Inicio from '../componentes/inicio';
import Footer from '../componentes/footer';

class Home extends Component{
    render(){
    return(
        <div id='home'>
            <div>
                <Navbar/>
            </div>
            <div>
                <Inicio/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Home;