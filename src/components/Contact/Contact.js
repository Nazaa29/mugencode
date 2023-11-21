import Form from "./Form/Form";
import Reveal from "../UI/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="h-min[h-fit] xl:h-screen bg-dark-custom relative">
      <div className="absolute top-8 bottom-0 left-8 md:left-14 bg-red-custom w-1px"></div>
      {/* Línea horizontal */}
      <div className="absolute w-4/5 top-16 md:left-24 left-20 right-24 h-1px invisible sm:visible bg-red-custom"></div>
      <Reveal>
        <h1 className="lg:text-6xl  sm:text-5xl text-4xl  pt-12 lg:pt-24 lg:ml-[182px] sm:pt-[100px] font-bold uppercase font-tungsten tracking-wider text-gray-custom text-center lg:text-start w-screen">
          Contact Us
        </h1>
      </Reveal>

      <div className="w-full">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
