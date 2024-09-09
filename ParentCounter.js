//4. PASO DE PARÁMETROS DE PADRE A HIJO
//Ejercicio 1: Contador desde el Padre ParentCounter.js

import React, { useState } from 'react';
import ChildCounter from './ChildCounter';

function ParentCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contador en el Padre</h1>
      <ChildCounter count={count} onIncrement={incrementCount} />
    </div>
  );
}

export default ParentCounter;

//ROBINSON MUÑOZ OSORIO.
