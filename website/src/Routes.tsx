import Store from './pages/Store';
import Home from './pages/Home';
import Credentials from './pages/Credentials';
import Config from './pages/Config';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {Fragment} from 'react';

const Routing = () => {
    return (
      <Router>
        <Fragment>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/loja' element={<Store/>}/>
            <Route path='/login' element={<Credentials/>}/>
            <Route path='/config' element={<Config/>}/>
          </Routes>
        </Fragment>
      </Router>
    );
}
  
export default Routing;