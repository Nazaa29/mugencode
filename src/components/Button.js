import React from 'react'

const Button = () => {
    return (
        <div className='w-[50%]'>
            <div></div> {/* Linea horizontal top */}
            <div > {/* Contenedor boton y lineas verticales */}
                <div></div> {/* Linea vertical izquierda */}
                <button className="relative transition inline-flex items-center justify-center w-full h-14 bg-dark-custom text-white font-roboto text-20 font-semibold border-none cursor-pointer uppercase duration-300 ease-in-out overflow-hidden group">
                    <span className="relative z-20 transition duration-300 ease-in-out">Enviar</span>
                    <div className="absolute z-10 w-full h-full top-0 left-0 -translate-x-full transition-all duration-700 ease-in-out transform translate-x-0 group-hover:translate-x-full bg-blue-500"></div>
                </button>
                <div></div> {/* Linea vertical derecha */}
            </div>
            <div></div> {/* Linea horizontal bottom */}
        </div>
    )
}

export default Button