import React,{Fragment} from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Nservicios from '../layout/Nservicios';
import ServiciosP from '../layout/ServiciosP';

const Principal = () => {
    return ( 
        <Fragment>
        <Header />
        <div className="
         bg-auto z-30  

        md:w-full md:h-full md:relative md:-top-10 md:z-30

        lg:w-full lg:h-full lg:relative lg:-top-10 lg:z-30 lg:py-16
        
        " id="imgpri">
          
          <div className=" 

          w-full text-left text-white text-xl py-10 px-6 

          md:w-full  md:text-left  md:text-white  md:text-5xl  md:py-52  md:px-20
          lg:w-full  lg:text-left  lg:text-white  lg:text-7xl  lg:py-40  lg:px-40
          
          ">
            <h1 className="bienvenido ">BIENVENIDO A MAQUI JAMPINA</h1>

            <p className=" parrafoBienvenido
            text-xl mt-4
            
            md:text-lg md:mt-4

            lg:text-2xl  lg:mt-4
            ">Brindamos un servicio de calidad a cargo de profesionales certificados.</p>
              
          </div>

        </div>

        <ServiciosP />
        <Nservicios />
        <Footer />
        </Fragment>
        );
}
 
export default Principal;