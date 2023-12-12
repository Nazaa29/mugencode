import React, { useEffect, useRef, useState } from "react";
import "../../assets/styles/barrahabilidad.css";

const BarraHabilidad = ({ habilidad }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      threshold: 0.1, // Ajusta según tus necesidades
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  useEffect(() => {
    if (isVisible && ref.current) {
      ref.current.style.width = `${habilidad.nivel}%`;
    }
  }, [isVisible, habilidad.nivel]);

  return (
    <div className="lg:mt-6 mr-2 lg: lg:w-full w-[94%] sm:mr-0 ml-12 xl:ml-0 md:ml-24 sm:ml-20 lg:ml-[132px] flex items-center justify-start mb-4 xl:mb-0 contenedor-habilidad">
      <div className="icono-habilidad sm:mr-2.5 mr-1 flex mt-3">
        <img
          className="sm:w-11 sm:h-11 w-9 h-9 object-contain"
          src={habilidad.icono}
          alt={`${habilidad.nombre} icon`}
        />
      </div>
      <div className="info-habilidad flex-1 flex flex-col">
        <div className="titulo-y-porcentaje flex justify-between items-center xl:w-[100%] lg:w-[70%] w-[86%]">
          <span className="nombre-habilidad m-[5px] font-semibold md:font-bold md:text-lg text-sm">
            {habilidad.nombre}
          </span>
          <span className="porcentaje-habilidad m-[5px] font-semibold md:font-bold md:text-lg text-sm">
            {habilidad.nivel}%
          </span>
        </div>
        <div className="barra-habilidad bg-[#ddd] rounded-[15px] overflow-hidden xl:w-[100%] lg:w-[70%] w-[86%]">
          <div
            ref={ref}
            className="progreso-habilidad h-[10px] rounded-[15px]"
            style={{ width: 0, backgroundColor: habilidad.color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BarraHabilidad;
