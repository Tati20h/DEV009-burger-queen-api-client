import React from 'react'
import PrimarySearchAppBar from "../componentes-internos/Bar"
import FullFeaturedCrudGrid from '../componentes-internos/User'

export const CreateUser = () => {
  return (
   <>
    <PrimarySearchAppBar />
    <div className="adm">
    <h1>Crear Usuario</h1>
   
    <FullFeaturedCrudGrid />
    </div>
    </>
  )
}
