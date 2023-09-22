import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";import Home from './views/inicio';
import Politicass from './views/politicas';
;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/Politicas" Component={Politicass}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
