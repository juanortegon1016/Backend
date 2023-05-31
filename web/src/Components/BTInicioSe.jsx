import React from 'react'


export const BTInicioSe = ({tipo,link}) => {

    //este componente es el boton que se utiliza para iniciar sesion
    //tando del cliente como del proveedor
    const handleClick = ()=>{
        window.open({link}, "_blank");
      }
  return (
    <button className='btnInicio'
    onClick={handleClick}>
        
       Inicia sesion como {tipo}

    </button>
  )
}
