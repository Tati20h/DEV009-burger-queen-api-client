import { Button } from '@mui/base'
import React from 'react'
import SpanningTable from '../componentes-internos/Orden'
import EnhancedTable from '../componentes-internos/Table'
import { useNavigate } from 'react-router-dom'

export const HomeMesero = () => {
  const navigate = useNavigate();
  const closeSesion = (e) => {
    e.preventDefault();
    localStorage.removeItem("user")
    navigate('/login');
  }

  let user = localStorage.getItem("user")
  user = JSON.parse(user)
  const token = user.accessToken

  return (
    <>
      <div className='head'>
        <div>
          <Button className='btn-exit' type="submit" onClick={closeSesion}>Cerrar Sesión</Button>
        </div>
      </div>
      <div className="row">
        <h1>ORDEN CLIENTE</h1>
        <h2> Ingresa el Nombre del cliente</h2>
        <input
          className='input-field'
          type="text"
          placeholder='Nombre Cliente'
        />
        <input
          className="input-field"
          type="search"
          placeholder="Buscar...!" >

        </input>

        <section className='tablas'>
          <div ><EnhancedTable token={token} />
            <input type="submit" className="bton" value="Agregar" />
          </div>
          <div >
            <SpanningTable />
            <input className='btn' type="submit" value='Crear orden' />
          </div>

        </section>

      </div>
    </>
  )
}
