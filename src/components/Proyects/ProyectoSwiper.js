import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import IconoReact from "../../assets/images/reactjs.png";
import IconoJS from "../../assets/images/javascript.png";
import { FaGlobe } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";

export default function ProyectoSwiper() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const [slidesPerView, setSlidesPerView] = useState(2);
  const [arrow, setArrow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Ajustar el número de slides por vista en función del tamaño de la pantalla
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
        setArrow(false);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(1);
        setArrow(true);
      } else {
        setSlidesPerView(2);
        setArrow(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={slidesPerView}
      navigation={arrow}
      pagination={{ clickable: true }}
      style={{ width: "70%", height: " 77%", margin: "auto" }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {proyectos.map((proyecto, index) => (
        <SwiperSlide>
          <div
            key={index}
            className="mt-8 relative max-w-[300px] min-w-[150px] bg-dark-custom shadow-[4px_4px_10px_0px_rgba(0,0,0,0.4)] w-[58%] lg:w-[68%] h-[87%] mb-3 mx-auto "
          >
            <img
              src={proyecto.imagenUrl}
              alt={proyecto.nombre}
              className="w-full object-cover border-b-2 border-red-custom h-[150px] xl:h-[200px]"
            />
            <div className="p-4">
              <div className="flex items-center mb-3 justify-between">
                <p className="text-gray-custom text-lg sm:text-xl mr-2 whitespace-nowrap font-semibold tracking-wider">
                  {proyecto.nombre}
                </p>
                <div className="w-[60%] hidden lg:visible lg:flex h-0 mt-1 border-t-[1px] border-t-red-custom"></div>
                <a
                  href={proyecto.enlaceSitio}
                  className="text-gray-custom text-lg sm:text-xl ml-2 hover:text-gray-400 duration-300"
                >
                  <FaGlobe />
                </a>
              </div>
              <p className="text-red-custom text-sm sm:text-base font-semibold mb-3">
                {proyecto.tecnologias}
              </p>
              <div className="mt-1 sm:mt-2">
                <span className="text-sm sm:text-base text-gray-custom pb-2">
                  {isLargeScreen
                    ? proyecto.descripcion
                    : proyecto.descripcionCorta}
                </span>
                <a
                  href={proyecto.enlace}
                  className="ml-2 text-red-custom text-sm sm:text-base hover:underline"
                >
                  Visitenos &gt;
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
}
