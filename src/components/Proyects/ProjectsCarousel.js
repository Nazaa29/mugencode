import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconoReact from "../../assets/images/reactjs.png";
import IconoJS from "../../assets/images/javascript.png";
import { FaGlobe } from "react-icons/fa";

// Componente individual para cada proyecto
const Proyecto = ({ datos }) => (
  <div className="relative bg-dark-custom shadow-[4px_4px_10px_0px_rgba(0,0,0,0.4)] mb-3 mx-auto w-[200px] h-[400px] sm:w-[300px] sm:h-[500px]">
    <img
      src={datos.imagenUrl}
      alt={datos.nombre}
      className="w-full object-cover border-b-2 border-red-custom h-[150px]"
    />
    <div className="p-4">
      <div className="flex items-center mt-2 justify-between">
        <p className="text-gray-custom text-xl mr-2 whitespace-nowrap font-semibold tracking-wider">
          {datos.nombre}
        </p>

        <div className="w-[60%] h-0 mt-2 border-t-[1px] border-t-red-custom"></div>
        <a
          href={datos.enlaceSitio}
          className="text-gray-custom text-2xl mt-1 ml-2 hover:text-gray-400 duration-300"
        >
          <FaGlobe />
        </a>
      </div>
      <p className="text-red-custom mt-4">{datos.tecnologias}</p>
      <div className="mt-4 ">
        <span className="text-base text-gray-custom">{datos.descripcion}</span>
        <a href="www.vacacay.com" className="ml-2 text-red-custom text-base hover:underline">Visitenos &gt;</a>
      </div>
    </div>
    <p className="absolute bottom-2 right-2 text-[10px] text-gray-custom">
      Powered by MUGENCODE
    </p>
  </div>
);

const ProjectsCarousel = () => {
  const proyectos = [
    {
      nombre: "Proyecto 1",
      imagenUrl: IconoJS,
      descripcion:
        "Este proyecto lo hicimos en 2023 mogolico mogolico mogolico Este proyecto lo hicimos en 2023 mogolico",
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
      tecnologias: "React - Redux - Tailwind", // Añadido
      enlaces: [
        { url: "#", text: "GitHub" },
        { url: "#", text: "Live Demo" },
      ],
      enlaceSitio: "https://www.proyecto2.com",
    },
  ];

  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 30000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
      style={{ width: "100%", maxWidth: "1024px", margin: "0 auto" }}
    >
      <Slider {...settings}>
        {proyectos.map((proyecto, index) => (
          <div key={index} className="px-2 sm:mx-0">
            <Proyecto datos={proyecto} />
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .slick-dots li button:before {
          font-size: 12px; /* Tamaño original, ajústalo más grande según necesites */
          color: #fff; /* o cualquier color que prefieras */
        }
        .slick-dots li.slick-active button:before {
          color: #ff0000;
        }
        .slick-dots {
          bottom: -30px;
        }
        /* Aumenta el tamaño de los dots */
        .slick-dots li {
          margin: 0 5px;
          width: 28px;
          height: 10px;
        }
        .slick-dots li button {
          width: 20px; /* Ancho del área clickable del dot */
          height: 20px; /* Altura del área clickable del dot */
        }
      `}</style>
    </div>
  );
};

export default ProjectsCarousel;
