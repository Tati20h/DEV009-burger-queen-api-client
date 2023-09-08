import React from 'react'
import { Login } from '../components/Login';
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';

export const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
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
