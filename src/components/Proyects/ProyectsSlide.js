import Reveal from "../UI/Reveal";
import ProyectoSwiper from "./ProyectoSwiper";

const ProyectsSlide = ({ setCurrent }) => {
  const buttonText = "TESTIMONIOS";
  const buttonLetters = buttonText.split("");
  const next = () => {
    console.log("click");
    setCurrent((current) => (current === 0 ? current + 1 : current));
  };

  return (
    <section className="w-full relative h-full sm:pb-12">
      <div className="absolute top-8 bottom-0 left-8 md:left-14 bg-gray-custom w-[1px]"></div>
      <div className="absolute w-4/5 top-16 md:left-24 left-20 right-24 h-1px invisible sm:visible bg-gray-custom"></div>
      <Reveal>
        <h1 className="lg:text-6xl  sm:text-5xl text-4xl  mt-12 lg:mt-24 lg:ml-[182px] sm:mt-[100px] font-bold uppercase font-tungsten tracking-wider text-gray-custom text-center lg:text-start w-screen">
          Proyectos
        </h1>
      </Reveal>
      <ProyectoSwiper/>
      
      <div
        className="absolute right-0 top-0 p-4 flex flex-col font-workSans items-center bg-black bg-opacity-25 justify-center text-gray-custom hover:text-red-custom hover:bg-opacity-50 h-full transition-all ease-in-out duration-500 cursor-pointer invisible lg:visible"
        onClick={next}
      >
        {buttonLetters.map((letter, index) => (
          <div key={index} className="m-3">
            {letter}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProyectsSlide;
