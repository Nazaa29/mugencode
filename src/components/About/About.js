import Reveal from "../UI/Reveal";

const About = () => {
  return (
    <section id="about" className="relative flex align-middle justify-center p-8 bg-gray-custom h-fit md:h-screen md:min-h-[660px]">
      {/* Línea vertical */}
      <div className="absolute top-8 bottom-0 left-8 md:left-14 bg-black w-1px"></div>
      {/* Línea horizontal */}
      <div className="absolute md:top-16 top-14 md:left-24 left-16 right-24 bg-black h-1px"></div>

      {/* Contenido */}
      <div className="md:absolute md:left-40 md:top-24 ml-2 lg:w-7/12 w-8-12">
        <div data-taos-offset="300"></div>
        <Reveal>
          <h1 className="md:text-6xl text-5xl text-center md:text-start font-bold uppercase md:mt-0 mt-10 font-tungsten tracking-wider animate-fade">
            About Us
          </h1>
        </Reveal>

        <p className="mt-4 ml-10 mr-10 md:mr-20 md:ml-0 sm:text-sm md:text-base text-xs  font-sourceCodePro">
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
