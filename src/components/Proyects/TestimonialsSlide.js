const TestimonialsSlide = ({current, setCurrent}) => {
    const buttonText = 'PROYECTOS';
    const buttonLetters = buttonText.split('');
    const prev = () => {
        setCurrent((current) => current === 0 ? current : current - 1)
    }

    return (
        <section className="w-full relative">
            <h1>Testimonios</h1>
            <div className="absolute left-0 p-4 flex flex-col items-center top-[19%]" onClick={prev}>
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