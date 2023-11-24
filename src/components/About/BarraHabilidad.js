import React, { useEffect, useRef } from "react";

const BarraHabilidad = ({ habilidad }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.width = `${habilidad.nivel}%`;
    }
  }, [habilidad.nivel]);

  return (
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
            ref={ref}
            className="progreso-habilidad"
            style={{ width: 0, backgroundColor: habilidad.color }} // Inicia en 0
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BarraHabilidad;
