import { useState } from "react";

function Carreritas() {
  // El state inicial es un objeto con dos propiedades: gato1 y gato2
  // Cada propiedad guarda el porcentaje de avance de cada gato
  const [state, setState] = useState({ gato1: 0, gato2: 0 });

  // Una función que simula el avance de los gatos
  // Cada vez que se llama, se genera un número aleatorio entre 0 y 10
  // y se suma al porcentaje de avance de cada gato
  // Si alguno de los gatos llega al 100%, se detiene la carrera
  const avanzar = () => {
    // Generar dos números aleatorios entre 0 y 10
    let paso1 = Math.floor(Math.random() * 10);
    let paso2 = Math.floor(Math.random() * 10);

    // Sumar los pasos al porcentaje de avance de cada gato
    let nuevoState = {
      gato1: state.gato1 + paso1,
      gato2: state.gato2 + paso2,
    };

    // Si alguno de los gatos llega al 100%, se detiene la carrera
    if (nuevoState.gato1 >= 100 || nuevoState.gato2 >= 100) {
      nuevoState.gato1 = Math.min(nuevoState.gato1, 100);
      nuevoState.gato2 = Math.min(nuevoState.gato2, 100);
      alert("¡La carrera ha terminado!");
    }

    // Actualizar el state con el nuevo valor
    setState(nuevoState);
  };

  return (
    <div className="w-full carrera">
      <h1>Carrera de gatos</h1>
      <div className="w-full pista">
        {/* La línea horizontal es un div con un borde inferior */}
        <div className="w-full linea"></div>
        {/* Las imágenes de los gatos son dos divs con un fondo */}
        {/* La propiedad transform: translateX() recibe el porcentaje de avance del state como argumento */}
        <img
            src="https://img.icons8.com/?size=2x&id=u9FesP83hwjK&format=png"
          className="gato"
          style={{ transform: `translateX(${state.gato1}%)` }}
        />
        <img
        src="https://img.icons8.com/?size=2x&id=u9FesP83hwjK&format=png"
          className="gato"
          style={{ transform: `translateX(${state.gato2}%)` }}
        />
      </div>
      {/* El botón llama a la función avanzar cada vez que se hace clic */}
      <button onClick={avanzar}>Avanzar</button>
    </div>
  );
}

export default Carreritas;

