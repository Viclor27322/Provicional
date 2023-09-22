import React from 'react';  
import '../css/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <section className="sect1_footer_inf text-white">
            <div id="footer_inf1">
                <h2 className="txt-inf"> Nosotros </h2>
                <p className="txt-inf">
                    Somos una empresa enfocada al desarrollo en la mejora de la salud de nuestros pacientes,
                     siempre dando los mejores resultados en cada uno de nuestros pacientes..</p>
                <Link to={'/'} className="txt-inf" id="terminos-condiciones">TERMINOS Y CONDICIONES</Link>
                <br/>
                <Link to={'/Politicas'} className="txt-inf" id="terminos-condiciones">POLITICAS DE PRIVACIDAD</Link>
            </div>

            <div id="footer_inf2">
                <h2 className="txt-inf">Contactos</h2>
                <p className="txt-inf"><i className="fa-solid fa-phone  rs-icons"></i>711--------</p>
                <p className="txt-inf"><i className="fa-solid fa-envelope  rs-icons"></i>hospitalsha@gmail.com</p>
            </div>

        </section>
        <section className="sect2_footer">
            <p>2023 Copyright Hospital SHA</p>
        </section>
    </div>
  )
}
