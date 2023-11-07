import { useState} from "react";
import ProyectsSlide from "./ProyectsSlide";
import TestimonialsSlide from "./TestimonialsSlide";

const Projects = () => {

  const [current, setCurrent] = useState(0);

  return (
    <div className="h-screen min-h-[700px] w-full overflow-hidden relative">
      <div id="projects" className="lg:h-screen w-[100%] h-[100%] min-h-[700px] lg:w-[200%] bg-teal-custom grid grid-cols-1 lg:grid-cols-2 gap-0 transition-transform ease-out duration-500" style={{transform : `translateX(-${current*50}%)`}}>
        <ProyectsSlide setCurrent={setCurrent}/>
        <TestimonialsSlide setCurrent={setCurrent}/>
      </div>      
    </div>
  );
};

export default Projects;