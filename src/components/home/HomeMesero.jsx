import React from 'react'

export const HomeMesero = () => {
  return (
    <div className='containe'>
      <h1>Pedido</h1>
      <div className="row">
        <div className="col-md-7">
          <p> Ingresa el Nombre del cliente</p>

          <button>Crear Orden</button>
        </div>
        <div className="pa2">
          <input
            className="pa3"
            type="search"
            placeholder="Buscar...!" >

          </input>
        </div>
        <section>

          <div className="table-header">
          </div>
          <div>Nombre del producto

          </div>
          <div> Categoria
          </div>
          <div>Precio
          </div>
          <div> Acciones
          </div>
          <div className="table-body">
          </div>
          <div>Hambur gold
          </div>
          <div> Breakfast
          </div>
          <div>$15.000
          </div>
          <div>
            <input type="submit" className="btn" value="Agregar" />
          </div>

        </section>
        <ul>
          <li>
          </li>
        </ul>
      </div>
    </div>
  )
}
