import React from 'react'
import PrimarySearchAppBar from "../componentes-internos/Bar"
import ButtonBaseDemo from '../componentes-internos/Button'


export const HomeAdmin = () => {
  return (
    <>

      <PrimarySearchAppBar />
      <div className="subtitle">
        <h1>Administrador</h1>
      </div>
      <div>
        <ButtonBaseDemo />
      </div>
    </>
  )
}
