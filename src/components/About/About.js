import Reveal from "../UI/Reveal";

const About = () => {
  const tecnologias = ['Tecnologia1', 'Tecnologia2', 'Tecnologia3'];

  return (
    <section id="about" className=" h-min[h-fit] xl:h-screen flex flex-col lg:flex-row bg-gray-custom relative">
      <div className="absolute top-8 bottom-0 left-8 md:left-14 bg-dark-custom w-1px"></div>
    {/* Línea horizontal */}
      <div className="absolute w-4/5 top-16 md:left-24 left-20 right-24 h-1px invisible sm:visible bg-dark-custom"></div>
      <div>
        <Reveal>
          <h1 className="lg:text-6xl  sm:text-5xl text-4xl  mt-12 lg:mt-24 lg:ml-[182px] sm:mt-[100px] font-bold uppercase font-tungsten tracking-wider text-dark-custom text-center lg:text-start w-screen">
            About Us
          </h1>
        </Reveal>
        <div className="lg:w-[40%] flex flex-col lg:flex-row mt-8 mb-20 ml-20 sm:ml-24 lg:ml-[181px] h-fit mr-16 lg:top-36 lg:left-[96px]">
          <p className="sm:text-sm text-xs xl:text-base font-sourceCodePro">
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
          <ul>
            {tecnologias.map((tecnologias,index) => (
              <li key={index}>{tecnologias}</li>
            ))}
          </ul>
        </div>
      </div>
      
        
    </section>
  );
};

export default About;
