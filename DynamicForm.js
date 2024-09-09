//2. USO DE useState
//Ejercicio 2: Formulario Dinámico

import React, { useState } from 'react';

function DynamicForm() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue(''); // Opcional: limpiar el campo después de enviar
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Escribe algo..."
        />
        <button type="submit">Enviar</button>
      </form>
      {submittedValue && <p>Texto ingresado: {submittedValue}</p>}
    </div>
  );
}

export default DynamicForm;

//ROBINSON MUÑOZ OSORIO.