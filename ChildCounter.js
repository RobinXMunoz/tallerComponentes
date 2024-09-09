//4. PASO DE PARÁMETROS DE PADRE A HIJO
//Ejercicio 1: Contador desde el Padre 
//Hijo

import React from 'react';

function ChildCounter({ count, onIncrement }) {
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={onIncrement}>Incrementar</button>
    </div>
  );
}

export default ChildCounter;

//ROBINSON MUÑOZ OSORIO.