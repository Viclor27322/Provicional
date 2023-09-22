import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Footer from '../componentes/footer';
import Politicas from '../componentes/politicas';

class Politicass extends Component{
    render(){
    return(
        <div >
            <div>
                <Navbar/>
            </div>
            <div>
                <Politicas/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}
export default Politicass;