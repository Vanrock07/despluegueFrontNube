

import {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from'react-router-dom';
import Login from './paginas/auth/login';
import Registro from './paginas/auth/Registro';
import Home from './paginas/Home';
function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/registro" exact element={<Registro />} />
            <Route path="/home" exact element={<Home />} />
          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
