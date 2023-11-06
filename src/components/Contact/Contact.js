import Form from "./Form/Form";
import Reveal from "../UI/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="lg:h-screen min-h-[790px] flex bg-dark-custom relative">
      <div className="absolute top-8 bottom-0 left-8 md:left-14 bg-red-custom w-1px"></div>
      {/* Línea horizontal */}
      <div className="absolute top-16 md:left-24 left-16 right-24 h-1px bg-red-custom"></div>
      <Reveal>
        <h1 className="md:text-6xl text-5xl absolute left-16 sm:left-0 top-24 font-bold uppercase font-tungsten tracking-wider text-gray-custom sm:text-center lg:text-start w-full lg:left-40 lg:top-14 lg:mt-10 lg:ml-7">
          Contact Us
        </h1>
      </Reveal>

      <div className="absolute top-1/2 2xl:top-[57%] left-1/2 transform -translate-x-1/2 mt-10 xl:mt-0 -translate-y-1/2 w-full felx flex-col">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
