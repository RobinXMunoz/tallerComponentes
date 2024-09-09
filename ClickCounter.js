//2. USO DE useState
//Ejercicio 3: Contador de Clics

import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Haz clic</button>
      <p>Has hecho clic {count} veces.</p>
    </div>
  );
}

export default ClickCounter;

//ROBINSON MUÑOZ OSORIO.