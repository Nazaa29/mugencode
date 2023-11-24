import React from "react";
import "../../assets/styles/globals.css";

const BarraHabilidad = ({ habilidad }) => (
  <div className="contenedor-habilidad">
    <div className="icono-habilidad">
      <img src={habilidad.icono} alt={`${habilidad.nombre} icon`} />
    </div>
    <div className="info-habilidad">
      <div className="titulo-y-porcentaje">
        <span className="nombre-habilidad">{habilidad.nombre}</span>
        <span className="porcentaje-habilidad">{habilidad.nivel}%</span>
      </div>
      <div className="barra-habilidad">
        <div
          className="progreso-habilidad"
          style={{ width: `${habilidad.nivel}%` }}
        ></div>
      </div>
    </div>
  </div>
);
export default BarraHabilidad;
