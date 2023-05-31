import React from 'react'

export const BtRegistro = ({tipo,link}) => {
    //este es el componente del boton que se usa para registrarse como nuevo usario 
    //ya sea cliente o proveedor
    const handleClick = ()=>{
        window.open({link}, "_blank");
      }
  return (
    <button className='btnRegistro'
    onClick={handleClick}>
        
        Registrate como {tipo}

    </button>
  )
}
