import { Button } from '@mui/material'
import React from 'react'
import SpanningTable from '../componentes-internos/Orden'
import { useNavigate } from 'react-router-dom'

export const HomeChef = () => {
  const navigate = useNavigate();
  const closeSesion = (e) => {
    e.preventDefault();
    localStorage.removeItem("user")
    navigate('/login');
  }
  return (
    <>
      <div className='head'>
        <div>
          <Button className='btn-exit' type="submit" onClick={closeSesion}>Cerrar Sesión</Button>
        </div>
      </div>
      <div className="row">
        <h1>COMANDAS COCINA</h1>

        <input
          className="input-field"
          type="search"
          placeholder="Buscar...!" >

        </input>
        <section className='tablas'>

          <div >
            <SpanningTable />
            <input className='btn' type="submit" value='Sale orden' />
          </div>

        </section>

      </div>
    </>

  )
}
