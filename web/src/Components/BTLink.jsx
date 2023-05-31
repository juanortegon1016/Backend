import React from 'react'
import "../Estilos/BTLink.css"



//Este componente es un boton para pasar de una seccion de la pagina a otra en 
//lo trabajaremos en 2 componente por algunas facilidades esteticas

export const BTLink = ({link, text,tipo}) => {
    

  // const history = useHistory();
//(estamos decifrando como usar la libreria de react router dom para cambiar de pagina)
  // const handleClick = () => {
  //   history.push(link);
  // };
  const handleClick = ()=>{
    window.open({link}, "_blank");
  }
  const extenso= valor =>{
    return valor !== "";
  } //este metodo es para saber si debe ser un boton alargado o pequeño
 

  return (
    <button className={`Boton ${extenso(tipo)? "amplio":null} `} 
    
    onClick={handleClick}>
        {text}
    </button> 
   
  )
}
