import React from 'react'
import './Card.css'
const Card = ({proveedor, setPedido}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center',color: 'blueviolet'}}>
        <h3 style={{marginRight: 20, color: 'white', backgroundColor:'black',border:'white'}}>{proveedor.nombre}</h3>
        <h4 style={{marginRight: 20}}>{proveedor.rubro}</h4>
        <button onClick={() => setPedido({producto: proveedor, form: true})}>Hacer pedido</button>
    </div>
  )
}

export default Card