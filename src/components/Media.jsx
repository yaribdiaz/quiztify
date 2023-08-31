import { useState, useEffect } from 'react';

const Media = ({ query, render, elseRender }) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Crea un objeto MediaQueryList
    const mediaQueryList = window.matchMedia(query);
    // Establece el estado inicial
    setMatches(mediaQueryList.matches);
    // Define una función para manejar los cambios de la media query
    const handleChange = (event) => {
      setMatches(event.matches);
    };
    // Añade un listener para los cambios de la media query
    mediaQueryList.addEventListener('change', handleChange);
    // Elimina el listener al desmontar el componente
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  // Renderiza el contenido según la media query
  return matches ? render() : elseRender();
};

export default Media;