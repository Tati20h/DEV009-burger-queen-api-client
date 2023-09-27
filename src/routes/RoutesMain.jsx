import React from 'react'
import { Login } from '../components/Login';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { HomeAdmin } from '../components/home/HomeAdmin';
import { HomeMesero } from '../components/home/HomeMesero';
import { HomeChef } from '../components/home/HomeChef';
import { CreateProduct } from '../components/inicio-admin/CreateProduct';
import { CreateUser } from '../components/inicio-admin/CreateUser';

export const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home-admin' element={<HomeAdmin />} />
        <Route path='/product-create' element={<CreateProduct/>}/>
        <Route path='/user-create'  element= {<CreateUser/>}/>
        <Route path='/home-mesero' element={<HomeMesero />} />
        <Route path='/home-chef' element={<HomeChef />} />
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
