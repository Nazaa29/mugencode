import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import IconoReact from "../../assets/images/reactjs.png";
import IconoJS from "../../assets/images/javascript.png";
import { FaGlobe } from "react-icons/fa";
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/bundle';

export default function ProyectoSwiper() {
    const proyectos = [
        {
            nombre: "Proyecto 1",
            imagenUrl: IconoJS,
            descripcion:
                "Este proyecto lo hicimos en 2023 mogolico mogolico mogolico Este proyecto lo hicimos en 2023 mogolico Este proyecto lo hicimos en 2023 mogolico mogolico mogolico",
            descripcionCorta:
                "Descripcion corta para todas las wachas cosa de que no joda me entendes?",
            tecnologias: "JavaScript - Node.js - Express", // Añadido
            enlaces: [
                { url: "#", text: "GitHub" },
                { url: "#", text: "Live Demo" },
            ],
            enlaceSitio: "https://www.proyecto1.com", // Asumiendo que hay un enlace al sitio del proyecto
        },
        {
            nombre: "Proyecto 2",
            imagenUrl: IconoReact,
            descripcion: "Descripción extendida del Proyecto 2.",
            descripcionCorta: "",
            tecnologias: "React - Redux - Tailwind", // Añadido
            enlaces: [
                { url: "#", text: "GitHub" },
                { url: "#", text: "Live Demo" },
            ],
            enlaceSitio: "https://www.proyecto2.com",
        },
        {
            nombre: "Proyecto 3",
            imagenUrl: IconoJS,
            descripcion: "Descripción extendida del Proyecto 1.",
            descripcionCorta: "",
            tecnologias: "JavaScript - Node.js - Express", // Añadido
            enlaces: [
                { url: "#", text: "GitHub" },
                { url: "#", text: "Live Demo" },
            ],
            enlaceSitio: "https://www.proyecto1.com",
        },
        {
            nombre: "Proyecto 4",
            imagenUrl: IconoReact,
            descripcion: "Descripción extendida del Proyecto 2.",
            descripcionCorta: "",
            tecnologias: "React - Redux - Tailwind", // Añadido
            enlaces: [
                { url: "#", text: "GitHub" },
                { url: "#", text: "Live Demo" },
            ],
            enlaceSitio: "https://www.proyecto2.com",
        },
    ];

    return (
        <Swiper
        modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            style={{ width: '70%', height:" 75%", margin: 'auto', }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {proyectos.map((proyecto, index) => (
                <SwiperSlide>
                <div key={index} className="mt-10 relative bg-dark-custom shadow-[4px_4px_10px_0px_rgba(0,0,0,0.4)] w-[61%] h-[85%] mb-3 mx-auto ">
                    <img
                        src={proyecto.imagenUrl}
                        alt={proyecto.nombre}
                        className="w-full object-cover border-b-2 border-red-custom h-[150px] xl:h-[200px]"
                    />
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-custom text-lg sm:text-xl lg:text-base xl:text-xl mr-2 whitespace-nowrap font-semibold tracking-wider mb-1 sm:mb-2">
                                {proyecto.nombre}
                            </p>
                            <div className="w-[60%] h-0 mt-1 sm:mt-2 border-t-[1px] border-t-red-custom"></div>
                            <a
                                href={proyecto.enlaceSitio}
                                className="text-gray-custom text-xl mt-1 ml-2 hover:text-gray-400 duration-300"
                            >
                                <FaGlobe />
                            </a>
                        </div>
                        <p className="text-red-custom text-sm sm:text-base lg:text-base xl:text-xl mb-1 sm:mb-2">
                            {proyecto.tecnologias}
                        </p>
                        <div className="mt-1 sm:mt-2">
                            <span className="text-sm sm:text-base lg:text-base xl:text-xl text-gray-custom mb-1 sm:mb-2">
                            </span>
                            <a
                                href={proyecto.enlace}
                                className="ml-2 text-red-custom text-sm sm:text-base hover:underline"
                            >
                                Visítenos &gt;
                            </a>
                        </div>
                    </div>
                    <p className="absolute bottom-2 right-2 text-[8px] sm:text-[10px] xl:text-[12px] text-gray-custom">
                        Powered by MUGENCODE
                    </p>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
