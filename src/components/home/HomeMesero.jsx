import { Button } from '@mui/base'
import React from 'react'
import SpanningTable from '../componentes-internos/Orden'
import EnhancedTable from '../componentes-internos/Table'
import { useNavigate } from 'react-router-dom'
import PrimarySearchAppBar from '../componentes-internos/Bar'
import IconButtons from '../componentes-internos/Icone'

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

        <PrimarySearchAppBar />

      </div>
      <div className="row">
        <h1>ORDEN CLIENTE</h1>

        <input
          className='input-field'
          type="text"
          placeholder='Nombre Cliente'
        />


        <section className='tablas'>
          <div ><EnhancedTable token={token} />


            <IconButtons />
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
