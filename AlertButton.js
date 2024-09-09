//3. EVENTOS CON BOTONES
//Ejercicio 3: Botón de Alerta

import React from 'react';

function AlertButton({ message }) {
  const showAlert = () => {
    alert(message);
  };

  return (
    <button onClick={showAlert}>
      Mostrar Alerta
    </button>
  );
}

export default AlertButton;

// ROBINSON MUÑOZ OSORIO.