import React from 'react'
import { Login } from '../components/Login';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Home } from '../components/home';

export const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={
          <>
            <p>
              <h1>Pagina no encontrada</h1>
              <Link to={"/"}>volver al inicio</Link>
            </p>
          </>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesMain
