import Form from "./Form/Form";
import Reveal from "../UI/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="xl:h-screen h-fit min-h-[790px] flex bg-dark-custom relative">
      <div className="absolute top-8 bottom-0 left-8 md:left-14 bg-red-custom w-1px"></div>
      {/* Línea horizontal */}
      <div className="absolute w-4/5 top-16 md:left-24 left-20 right-24 h-1px invisible sm:visible bg-red-custom"></div>
      <Reveal>
        <h1 className="lg:text-6xl text-5xl ml-2 mt-6 sm:mt-2 absolute sm:top-24 top-10 font-bold uppercase font-tungsten tracking-wider text-gray-custom text-center lg:text-start w-[300px] lg:left-40 lg:top-14 lg:mt-10 lg:ml-7">
          Contact Us
        </h1>
      </Reveal>

      <div className="absolute sm:top-[50%] top-[44%] 2xl:top-[57%] left-1/2 transform -translate-x-1/2 mt-10 xl:mt-0 -translate-y-1/2 w-full felx flex-col">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
