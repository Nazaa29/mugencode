import Testimonial from "./Testimonial";
import perfil1 from '../../assets/images/foto-perfil-1.png'
import perfil2 from '../../assets/images/perfil2.jpg'
import { useState, useEffect } from "react";
import RevealHorizontal from "../UI/RevealHorizontal";

const TestimonialsSlide = ({ setCurrent }) => {
    const buttonText = 'PROYECTOS';
    const buttonLetters = buttonText.split('');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    const testimonials = [
        {
            name: "Fernando Lopez",
            bussiness: 'Solymar Agencia de Turismo',
            text: "Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonioTexto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio",
            image: perfil1
        },
        {
            name: "Juan Cruz Dovzak",
            bussiness: 'Marketfy eCommerce',
            text: "Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonioTexto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio",
            image: perfil2
        },
        {
            name: "Fernando Lopez",
            bussiness: 'Solymar Agencia de Turismo',
            text: "Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonioTexto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio Texto del testimonio 1. Puede ser un párrafo largo que se ajustará al contenedor.Texto del testimonio",
            image: perfil1
        },
        // Puedes agregar más objetos testimonio según sea necesario
    ];

    const prev = () => {
        setCurrent((current) => current === 0 ? current : current - 1)
    }

    const changeTestimonialAutomatically = () => {
        setCurrentTestimonial((current) => (current + 1) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(changeTestimonialAutomatically, 20000); // 30,000 ms = 30 segundos

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <section className="h-full relative w-screen lg:flex lg:flex-col lg:visible hidden">
            <div className="absolute top-8 bottom-0 right-16 bg-gray-custom w-[1px]"></div>
            {/* Línea horizontal */}
            <div className="absolute w-4/5 top-16 md:left-[84px] left-20 right-24 h-1px  bg-gray-custom"></div>
            <RevealHorizontal>
            <h1 className="lg:text-6xl text-4xl absolute left-1/2 -translate-x-2/4 lg:left-40 top-10 lg:translate-x-0 lg:top-14 font-bold uppercase mt-10 ml-7 font-tungsten tracking-wider text-gray-custom">Testimonios</h1>
            </RevealHorizontal> 
            <div className="absolute left-0 top-0 font-workSans p-4 flex flex-col items-center bg-black bg-opacity-25 justify-center text-gray-custom hover:text-red-custom hover:bg-opacity-50 h-full transition-all ease-in-out duration-500 cursor-pointer invisible lg:visible" onClick={prev}>
                {buttonLetters.map((letter, index) => (
                    <div key={index} className="m-3">
                        {letter}
                    </div>
                ))}
            </div>
            <ul className="flex h-[400px] w-[1000px] overflow-hidden absolute translate-x-[-48%] left-[50%] bottom-[25%]">
                {testimonials.map((testimonial, index) => (
                    <Testimonial
                        currentTestimonial={currentTestimonial}
                        key={index}
                        name={testimonial.name}
                        bussiness={testimonial.bussiness}
                        text={testimonial.text}
                        image={testimonial.image}
                    />
                ))}
            </ul>
            <ul className="flex absolute bottom-36 left-[50%] translate-x-[-50%]">
                {testimonials.map((_, index) => (
                    <li className={`rounded-full w-4 h-4 bg-gray-custom m-4 cursor-pointer  ${currentTestimonial === index ? 'bg-red-custom' : ''}`}
                        onClick={() => setCurrentTestimonial(index)}
                    >
                    </li>
                ))}
            </ul>

        </section>
    );
}

export default TestimonialsSlide;