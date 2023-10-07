import React from "react";
import "../../assets/styles/boton.css"; // Importa el archivo CSS

const Button = () => {
  return (
    <div className="w-[50%] relative buttonContainer">
      {/* Agregada clase buttonContainer */}
      <button type="submit" className="button">
        Send
      </button>
      <svg className="rect">
        <rect x="0" y="0" fill="none" width="100%" height="100%" />
      </svg>
    </div>
  );
};

export default Button;
