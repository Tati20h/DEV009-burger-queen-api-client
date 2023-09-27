import { Button } from '@mui/material'
import React from 'react'
import SpanningTable from '../componentes-internos/Orden'
import { useNavigate } from 'react-router-dom'
import PrimarySearchAppBar from '../componentes-internos/Bar'

export const HomeChef = () => {
  const navigate = useNavigate();
  const closeSesion = (e) => {
    e.preventDefault();
    localStorage.removeItem("user")
    navigate('/login');
  }
  return (
    <>

    
      <PrimarySearchAppBar />
       
      
      <div className="row">
        <h1>COMANDAS COCINA</h1>

     
        <section className='tablas'>

    
            <SpanningTable />
            <input className='btn' type="submit" value='Sale orden' />
     

        </section>

      </div>
    </>

  )
}
