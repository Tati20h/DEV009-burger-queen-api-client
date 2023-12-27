import React from 'react'
import PrimarySearchAppBar from "../componentes-internos/Bar"
import FullFeaturedCrudGrids from '../componentes-internos/Product'




export const CreateProduct = () => {
  return (
    <>
    <PrimarySearchAppBar />
    <div className="admi">
    <h1>Crear Producto </h1>
    <FullFeaturedCrudGrids />
  </div>
  </>
  )
}
