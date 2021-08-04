import React,{Fragment} from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Bienvenido from '../layout/Bienvenido';
import Somos from '../layout/Somos';

const Nosotros = () => {
    return ( 
        <Fragment>
        <Header />
        <div className="
        
        w-full  relative -top-10 z-30 h-36
        lg:w-full  lg:relative lg:-top-10 lg:z-30 lg:h-60
        " id="imgpri">  </div>
          
        <Bienvenido />
        <Somos />
        <Footer />
        </Fragment>
    );
}
 
export default Nosotros;