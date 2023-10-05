import React from "react";

const Button = () => {
  return (
    <div className="w-[50%]">
      <div></div> {/* Linea horizontal top */}
      <div>
        {" "}
        {/* Contenedor boton y lineas verticales */}
        <div></div> {/* Linea vertical izquierda */}
        <button
          class="before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl 
                before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-left before:translate-x-full 
                before:translate-y-12 before:rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white
                hover:shadow-black hover:before:rotate-180"
        >
          <span class="relative z-10">Slide hover</span>
        </button>
        <button className="button type3">prueba</button>
        <button className="button type1">prueba2</button>
        <div></div> {/* Linea vertical derecha */}
      </div>
      <div></div> {/* Linea horizontal bottom */}
    </div>
  );
};

export default Button;
