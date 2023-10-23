import { useState} from "react";

const Projects = () => {

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current) => current === 0 ? current : current - 1)
  }

  const next = () => {
    setCurrent((current) => current === 0 ? current + 1 : current)
  }

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <div id="projects" className="h-screen w-[200%] bg-teal-custom flex transition-transform ease-out duration-500" style={{transform : `translateX(-${current*50}%)`}}>
        <section className="w-[100%]">
          <h1>Proyectos</h1>
        </section>
        <section className="w-[100%]">
          <h1>Testimonios</h1>
        </section>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button size={40} onClick={prev}>left</button>
        <button size={40} onClick={next}>right</button>
      </div>
      
    </div>
  );
};

export default Projects;