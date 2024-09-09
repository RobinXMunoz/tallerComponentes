//1. PASO DE PARÁMETROS A COMPONENTES
// Ejercicio 2: Detalles de Usuario
import React from 'react';

function UserDetails(props) {
  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p><strong>Nombre:</strong> {props.nombre}</p>
      <p><strong>Edad:</strong> {props.edad} años</p>
      <p><strong>Ocupación:</strong> {props.ocupacion}</p>
    </div>
  );
}

export default UserDetails;

//ROBINSON MUÑOZ OSORIO.
