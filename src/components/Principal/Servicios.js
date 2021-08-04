import React,{Fragment} from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ListaServicios from '../layout/ListaServicios';
import ServicioEstetico from '../layout/ServicioEstetico';



const Servicios = () => {
    return ( 
        <Fragment>
        <Header />
        <div className="w-full  relative -top-10 z-30 h-60" id="imgpri">  </div>
        
        <ListaServicios />
        <ServicioEstetico/>
        <Footer />
        </Fragment>
     );
}
 
export default Servicios;