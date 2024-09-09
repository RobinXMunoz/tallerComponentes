//2. USO DE useState
//Ejercicio 1: Control de Visibilidad

import React, { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ocultar' : 'Mostrar'} texto
      </button>
      {isVisible && <p>Este es el texto que puedes mostrar u ocultar.</p>}
    </div>
  );
}

export default ToggleText;

//ROBINSON MUÑOZ OSORIO.