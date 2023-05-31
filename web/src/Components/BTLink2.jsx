import React from 'react'
import "../Estilos/BTLink2.css"



//Este componente es un boton para pasar de una seccion de la pagina a otra en 
//lo trabajaremos en 2 componente por algunas facilidades esteticas

export const BTLink2 = ({link, text,tipo}) => {
    

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
  }//este metodo es para saber si debe ser un boton alargado o pequeño
  

  return (
    <button className={`Boton2 ${extenso(tipo)? "amplio2":null} `} 
    
    onClick={handleClick}>
        {text}
    </button> 
   
  )
}
