import Reveal from "../UI/Reveal";
import BarraHabilidad from "./BarraHabilidad";
import iconoJS from "../../assets/images/javascript.png";
import iconoReact from "../../assets/images/reactjs.png";
import iconoMDB from "../../assets/images/mongodb.png";
import iconoNode from "../../assets/images/nodejs.png";
import iconoCSS from "../../assets/images/css.png";
import iconoTW from "../../assets/images/tailwind.png";
import iconoHTML from "../../assets/images/html.png";
import iconoG from "../../assets/images/gaming.png";

const About = () => {
  const habilidades = [
    { nombre: "JavaScript", nivel: 90, icono: iconoJS },
    { nombre: "React", nivel: 70, icono: iconoReact },
    { nombre: "MongoDB", nivel: 60, icono: iconoMDB },
    { nombre: "NodeJS", nivel: 70, icono: iconoNode },
    { nombre: "CSS", nivel: 90, icono: iconoCSS },
    { nombre: "Tailwind", nivel: 60, icono: iconoTW },
    { nombre: "HTML", nivel: 100, icono: iconoHTML },
    { nombre: "Gaming", nivel: 9999, icono: iconoG },
  ];

  return (
    <section
      id="about"
      className=" h-min[h-fit] xl:h-screen flex flex-col lg:flex-row bg-gray-custom relative"
    >
      <div className="absolute top-8 bottom-0 left-8 md:left-14 bg-dark-custom w-1px"></div>
      {/* Línea horizontal */}
      <div className="absolute w-4/5 top-16 md:left-24 left-20 right-24 h-1px invisible sm:visible bg-dark-custom"></div>
      <div>
        <Reveal>
          <h1 className="lg:text-6xl  sm:text-5xl text-4xl  mt-12 lg:mt-24 lg:ml-[182px] sm:mt-[100px] font-bold uppercase font-tungsten tracking-wider text-dark-custom text-center lg:text-start w-screen">
            About Us
          </h1>
        </Reveal>
        <div className="lg:w-3/4 flex flex-col lg:flex-row mt-8 mb-20 ml-20 sm:ml-24 lg:ml-[181px] h-fit mr-16 lg:top-36 lg:left-[96px]">
          <p className="sm:text-sm text-xs xl:text-base font-sourceCodePro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsumipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsumipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsumipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsumipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum
          </p>
        </div>
        <div className="contenedor-habilidades flex flex-wrap justify-center">
          <ul className="lista-habilidades w-full">
            {habilidades.map((habilidad, index) => (
              <li key={index} className="elemento-lista-habilidades">
                <BarraHabilidad habilidad={habilidad} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
