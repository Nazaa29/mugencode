import Form from "./Form/Form";
import Reveal from "../UI/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="xl:h-screen min-h-[690px] md:min-h-[790px] lg:min-h-[810px]: flex bg-dark-custom relative">
      <div className="absolute top-8 bottom-0 left-8 md:left-14 bg-red-custom w-1px"></div>
      {/* Línea horizontal */}
      <div className="absolute w-4/5 top-16 md:left-24 left-20 right-24 h-1px invisible sm:visible bg-red-custom"></div>
      <Reveal>
        <h1 className="lg:text-6xl text-4xl sm:text-5xl absolute left-1/2 -translate-x-2/4 lg:left-40 top-10 sm:top-16 lg:translate-x-0 lg:top-14 font-bold ml-10 sm:ml-3 uppercase mt-10 lg:ml-7 font-tungsten tracking-wider w-[200px] lg:w-[300px] text-gray-custom">
          Contact Us
        </h1>
      </Reveal>

      <div className="absolute sm:top-[53%] top-[50%] 2xl:top-[57%] left-1/2 transform -translate-x-1/2 mt-10 xl:mt-4 -translate-y-1/2 w-full felx flex-col">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
