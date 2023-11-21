import React from "react";
import "../../assets/styles/boton.css";
import { useRef, useEffect, useState } from "react";
// Importa el archivo CSS

const Button = () => {
  const buttonRef = useRef(null);
  const [widthButton, setWidthButton] = useState(117);

  const updateWidth = () => {
    if (buttonRef.current) {
      setWidthButton(buttonRef.current.offsetWidth + 20.5);
    }
  };

  useEffect(() => {
    updateWidth(); // Actualizar el ancho inicial
    window.addEventListener("resize", updateWidth); // Escuchar eventos de redimensionamiento de ventana

    return () => {
      window.removeEventListener("resize", updateWidth); // Desuscribirse del evento en la limpieza
    };
  }, []);

  return (
    <div className="w-[50%] relative buttonContainer self-center mr-6 pb-1 sm:mr-4">
      {/* Agregada clase buttonContainer */}
      <button type="submit" className="button lg:pt-[17px] lg:pb-[17px] pt-3 pb-3 ml-[9.5px] m-[10px] w-[100%] min-w-[100px] z-[2]" ref={buttonRef}>
        Send
      </button>
      <svg className="rect w-[110%] h-[80px]" style={ {minWidth: widthButton} }>
        <rect x="0" y="0" fill="none" width="100%"  className="lg:h-[78px] h-[68px] z-[1]"/>
      </svg>
    </div>
  );
};

export default Button;
