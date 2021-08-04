
import './App.css';
import Principal from './components/Principal/Principal';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nosotros from './components/Principal/Nosotros';
import Servicios from './components/Principal/Servicios';
import Contacto from './components/Principal/Contacto';
import NotFoundPage from './components/layout/NotFoundPage';
import ScrollTop from './components/ayudas/ScrollTop';
function App() {
  
    

  return (

    <Router>
<ScrollTop>
    <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/Nosotros" component={Nosotros} />
        <Route exact path="/Servicios" component={Servicios} />
        <Route exact path="/Contactenos" component={Contacto} />
        <Route path="/*" component={NotFoundPage} />
    </Switch>
</ScrollTop>
  </Router>



  );
}

export default App;
