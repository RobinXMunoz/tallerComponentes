//1. PASO DE PARÁMETROS A COMPONENTES
// Ejercicio 3: Lista de Tareas
import React from 'react';

function Task(props) {
  const { title, completed } = props.task;

  return (
    <div>
      <h3>{title}</h3>
      <p>{completed ? 'Completada' : 'Pendiente'}</p>
    </div>
  );
}

export default Task;

//ROBINSON MUÑOZ OSORIO.
