import React from 'react'

export const CalificacionOthers = ({nombre,reseña}) => {
    //este es el componente tipo card que mostrar la calificacion que han recibido los demas usarios
  return (
    <div className='contenedorOthers'>
      {nombre}
      {
        //aqui va la cantidad de estrellas que aun no sabemos como poner
      }
      {reseña}

    </div>
  )
}
