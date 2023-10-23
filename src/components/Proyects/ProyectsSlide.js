const ProyectsSlide = ({current, setCurrent}) => {
    const buttonText = 'TESTIMONIOS';
    const buttonLetters = buttonText.split('');
    const next = () => {
        console.log('click')
        setCurrent((current) => current === 0 ? current + 1 : current)
    }

    return (
        <section className="w-full relative">
            <h1>Proyectos</h1>
            <div className="absolute right-0 p-4 flex flex-col items-center top-[12.5%] bg-white hover:bg-red-custom" onClick={next}>
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