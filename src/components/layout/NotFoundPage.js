import React from 'react';
import errorImage from '../assets/error.jpg'
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return ( 
    
    <div className="lg:w-5/12 mx-auto pt-24 md:pt-0 md:w-8/12 md:mt-16 text-center">
        <img src={errorImage} className=""></img>
        <h1>Esta ruta no existe, <Link to="/"  className="text-teal-500">volver a la página </Link></h1>
    </div>
    
    );
}
 
export default NotFoundPage;