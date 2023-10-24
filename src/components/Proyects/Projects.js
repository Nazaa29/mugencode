import { useState} from "react";
import ProyectsSlide from "./ProyectsSlide";
import TestimonialsSlide from "./TestimonialsSlide";

const Projects = () => {

  const [current, setCurrent] = useState(0);

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <div id="projects" className="h-screen w-[200%] bg-teal-custom flex transition-transform ease-out duration-500" style={{transform : `translateX(-${current*50}%)`}}>
        <ProyectsSlide setCurrent={setCurrent}/>
        <TestimonialsSlide setCurrent={setCurrent}/>
      </div>      
    </div>
  );
};

export default Projects;