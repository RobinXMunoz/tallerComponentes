//3. EVENTOS CON BOTONES
//Ejercicio 2: Control de Tema

import React, { useState } from 'react';

function ThemeSwitcher({ onThemeChange }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
}

export default ThemeSwitcher;

// ROBINSON MUÑOZ OSORIO.