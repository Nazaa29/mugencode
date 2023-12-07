import Reveal from "../UI/Reveal";
import BarraHabilidad from "./BarraHabilidad";
import React, { useState, useEffect } from "react";
import iconoJS from "../../assets/images/javascript.png";
import iconoReact from "../../assets/images/reactjs.png";
import iconoMDB from "../../assets/images/mongodb.png";
import iconoNode from "../../assets/images/nodejs.png";
import iconoCSS from "../../assets/images/css.png";
import iconoTW from "../../assets/images/tailwind.png";
import iconoHTML from "../../assets/images/html.png";
import iconoG from "../../assets/images/gaming.png";

const About = () => {
  const [showVerticalLine, setShowVerticalLine] = useState(
    window.innerWidth > 640
  );

  useEffect(() => {
    const handleResize = () => setShowVerticalLine(window.innerWidth > 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const habilidades = [
    { nombre: "JavaScript", nivel: 90, icono: iconoJS },
    { nombre: "React", nivel: 70, icono: iconoReact },
    { nombre: "MongoDB", nivel: 60, icono: iconoMDB },
    { nombre: "NodeJS", nivel: 70, icono: iconoNode },
    { nombre: "CSS", nivel: 90, icono: iconoCSS },
    { nombre: "Tailwind", nivel: 60, icono: iconoTW },
    { nombre: "HTML", nivel: 100, icono: iconoHTML },
    { nombre: "Gaming", nivel: 100, icono: iconoG },
  ];

  return (
    <section
      id="about"
      className=" h-min[h-fit] flex flex-col lg:flex-row bg-gray-custom relative pb-8"
    >
      <div
        className="absolute top-8 bottom-0 left-8 md:left-14 bg-dark-custom w-1px"
        style={{ display: showVerticalLine ? "block" : "none" }}
      ></div>
      {/* Línea horizontal */}
      <div className="absolute w-4/5 top-16 md:left-24 left-20 right-24 h-1px invisible sm:visible bg-dark-custom"></div>
      <div>
        <Reveal>
          <h1 className="lg:text-6xl  sm:text-5xl text-4xl  mt-12 lg:mt-24 lg:ml-[182px] sm:mt-[100px] font-bold uppercase font-tungsten tracking-wider text-dark-custom text-center lg:text-start w-screen">
            About Us
          </h1>
        </Reveal>

        <div className="xl:flex">
          <div className="xl:w-[48%] lg:w-[64%] flex flex-col lg:flex-row mt-8 mb-8 ml-12 sm:ml-24 lg:ml-[181px] h-fit xl:mr-10 mr-12 lg:top-36 lg:left-[96px] 2xl:mt-10">
            <p className="sm:text-sm text-xs xl:text-base font-sourceCodePro 2xl:text-[18px]">
              Hola, soy [Tu Nombre], un apasionado y dedicado desarrollador Full
              Stack con experiencia en crear soluciones web eficientes y
              atractivas. Me especializo en el stack MERN, que incluye MongoDB,
              Express.js, React.js y Node.js, combinando estas poderosas
              tecnologías para construir aplicaciones web desde el backend hasta
              el frontend. Mi viaje en el mundo del desarrollo web comenzó hace
              [X años], impulsado por mi curiosidad y amor por la tecnología.
              Desde entonces, he trabajado en varios proyectos, desde sitios web
              empresariales hasta aplicaciones web interactivas, siempre con el
              objetivo de entregar productos que no solo cumplan con los
              requisitos técnicos sino que también proporcionen una experiencia
              de usuario excepcional. En el frontend, utilizo principalmente
              React.js, aprovechando su eficiente renderizado y la capacidad de
              construir interfaces de usuario dinámicas y reactivas. Para los
              estilos, soy adepto en CSS y frameworks como Tailwind CSS, que me
              permite crear diseños responsivos y visualmente atractivos con
              eficiencia y precisión. En el backend, mi experiencia con Node.js
              y Express.js me permite construir servidores robustos y
              escalables. La gestión de bases de datos con MongoDB complementa
              mis habilidades en el backend, permitiéndome manejar datos
              complejos y garantizar que las aplicaciones funcionen sin
              problemas. Constantemente busco nuevas tecnologías y metodologías
              para mejorar mis habilidades y mantenerme al día con las
              tendencias actuales en desarrollo web. La innovación y la
              adaptabilidad son clave en este campo, y estoy comprometido a
              aprender y crecer continuamente como profesional. Mi objetivo es
              colaborar en proyectos desafiantes y significativos donde pueda
              aplicar mi experiencia y al mismo tiempo aprender y crecer. Estoy
              ansioso por conectar con personas y empresas que compartan mi
              pasión por crear soluciones digitales excepcionales.
            </p>
          </div>
          <div className="xl:w-[20%] 2xl:w-[25%]">
            <ul className="lista-habilidades">
              {habilidades.map((habilidad, index) => (
                <li key={index} className="elemento-lista-habilidades">
                  <BarraHabilidad habilidad={habilidad} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
