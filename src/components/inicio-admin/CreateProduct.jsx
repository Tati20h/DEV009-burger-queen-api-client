import React from 'react'

import PrimarySearchAppBar from "../componentes-internos/Bar"
import ColumnPinningWithCheckboxSelection from '../componentes-internos/Product';



export const CreateProduct = () => {
  return (
  
    <div>
    <PrimarySearchAppBar />
    <h1>CreateProduct </h1>
    <ColumnPinningWithCheckboxSelection />
  </div>
  )
}
