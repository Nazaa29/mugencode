import gif from "../assets/images/coding.gif";

const About = () => {
  return (
    <section className="relative flex p-8 bg-gray-custom h-screen border-t border-black">
      {/* Línea vertical */}
      <div className="absolute top-8 bottom-0 left-14 bg-black w-1px"></div>
      {/* Línea horizontal */}
      <div className="absolute top-16 left-24 right-24  bg-black h-1px"></div>

      {/* Contenido */}
      <div className="absolute left-16 top-16">
        <h1 className="text-6xl font-bold uppercase mt-10 ml-7 font-tungsten">
          About Us
        </h1>
        <p className="mt-4 font-tungsten">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum
        </p>
      </div>

      {/* Gif */}
      <div className="absolute right-0 top-64 w-240 h-240">
        <img src={gif} alt="codigo" className="w-3/4" />
      </div>
    </section>
  );
};

export default About;
