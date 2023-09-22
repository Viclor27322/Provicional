import React from 'react';
import Clin from '../img/clin.jpg'

export default function Inicio(){
    return(
        <div className='container p-5'>
            <div className='d-flex justify-content-around p-5'>
            <section className='container-lg'>
                <h2 className='text-secondary'>
                    La solucion para tus problemas de salud, somos expertos en tu cuidado.
                </h2>
                <h6>
                    Con la experiencia de muchos años en la vanguardia en los temas de la salud y cuidado clinico.
                </h6>
            </section>
            <section className='container-lg'>
                    <img src={Clin} alt=""  />
            </section>
            </div>
            
        </div>
    )
}