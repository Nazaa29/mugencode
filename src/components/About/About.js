import Reveal from "../UI/Reveal";

const About = () => {
  return (
    <section id="about" className="relative flex p-8 bg-gray-custom h-screen">
      {/* Línea vertical */}
      <div className="absolute top-8 bottom-0 left-14 bg-black w-1px"></div>
      {/* Línea horizontal */}
      <div className="absolute top-16 left-24 right-24  bg-black h-1px"></div>

      {/* Contenido */}
      <div className="absolute left-40 top-24 w-7/12">
        <div className="" data-taos-offset="300"></div>
        <Reveal>
          <h1 className="text-6xl font-bold uppercase mt-10 ml-7 font-tungsten tracking-wider animate-fade">
            About Us
          </h1>
        </Reveal>

        <p className="mt-4 ml-7 font-sourceCodePro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
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
          ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum
        </p>
      </div>
    </section>
  );
};

export default About;
