//1. PASO DE PARÁMETROS A COMPONENTES
//Ejercicio 1: Saludo Personalizado

import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h1>Hola, {props.name}!</h1>
    </div>
  );
}

export default Greeting;

//ROBINSON MUÑOZ OSORIO.
