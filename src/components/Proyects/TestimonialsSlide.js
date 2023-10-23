const TestimonialsSlide = ({setCurrent}) => {
    const buttonText = 'PROYECTOS';
    const buttonLetters = buttonText.split('');
    const prev = () => {
        setCurrent((current) => current === 0 ? current : current - 1)
    }

    return (
        <section className="w-full relative">
            <div className="absolute top-8 bottom-0 right-14 bg-gray-custom w-[1px]"></div>
            {/* Línea horizontal */}
            <div className="absolute top-16 left-24 right-24  bg-gray-custom h-[1px]"></div>
            <h1 className="text-6xl absolute right-40 top-14 font-bold uppercase mt-10 ml-7 font-tungsten tracking-wider text-gray-custom">Testimonios</h1>
            <div className="absolute left-0 top-0 p-4 flex flex-col items-center bg-black bg-opacity-25 justify-center text-gray-custom hover:text-red-custom hover:bg-opacity-50 h-full transition-all ease-in-out duration-500" onClick={prev}>
                {buttonLetters.map((letter, index) => (
                    <div key={index} className="m-3">
                        {letter}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TestimonialsSlide;