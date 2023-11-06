import Reveal from "../UI/Reveal";

const ProyectsSlide = ({setCurrent}) => {
    const buttonText = 'TESTIMONIOS';
    const buttonLetters = buttonText.split('');
    const next = () => {
        console.log('click')
        setCurrent((current) => current === 0 ? current + 1 : current)
    }

    return (
        <section className="w-full relative">
            <div className="absolute top-8 bottom-0 left-8 md:left-14 bg-gray-custom w-[1px]"></div>
            {/* Línea horizontal */}
            <div className="absolute top-16 md:left-24 left-16 right-24  bg-gray-custom h-[1px]"></div>
            <Reveal>
                <h1 className="text-6xl absolute left-40 top-14 font-bold uppercase mt-10 ml-7 font-tungsten tracking-wider text-gray-custom" >Proyectos</h1>
            </Reveal>
            
            <div className="absolute right-0 top-0 p-4 flex flex-col items-center bg-black bg-opacity-25 justify-center text-gray-custom hover:text-red-custom hover:bg-opacity-50 h-full transition-all ease-in-out duration-500 cursor-pointer" onClick={next}>
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