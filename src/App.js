

import {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from'react-router-dom';
import Login from './paginas/auth/login';
import Registro from './paginas/auth/Registro';
import Home from './paginas/Home';
import ComponenteClienteMostar from './paginas/modulos/CompClienteMostrar';
import ComponenteProveedorMostrar from './paginas/modulos/ComProveedorMostrar';
import CompAddClientes from './paginas/modulos/CompAddClientes';
import CompAddProveedor from './paginas/modulos/CompAddProveedor';
import CompEditCliente from './paginas/modulos/CompEditCliente';
import CompEditProveedor from './paginas/modulos/CompEditProveedor';
function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/registro" exact element={<Registro />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/clientes" exact element={<ComponenteClienteMostar />} />
            <Route path="/clientes/agregar" exact element={<CompAddClientes/>} />
            <Route path="/clientes/editar/:id" exact element={<CompEditCliente/>} />
            <Route path="/proveedores" exact element={<ComponenteProveedorMostrar />} />
            <Route path="/proveedores/agregar" exact element={<CompAddProveedor />} />
            <Route path="/proveedores/editar/:id" exact element={<CompEditProveedor/>} />
          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
