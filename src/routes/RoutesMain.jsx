import React from 'react'
import { Login } from '../components/Login';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { HomeAdmin } from '../components/home/HomeAdmin';
import { HomeMesero } from '../components/home/HomeMesero';

export const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home-admin' element={<HomeAdmin />} />
        <Route path='/home-mesero' element={<HomeMesero />} />
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
