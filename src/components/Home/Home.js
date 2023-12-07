import React from "react";
import ParticleScene from "./ParticleScene";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import '../../assets/styles/titulostyle.css'

const Home = (props) => {
  const dynamicHeight = `calc(100vh - ${props.headerHeight}px)`;
  const [text] = useTypewriter({
    words: ['web Developers;', 'web Designers;', 'Freelancers;', 'Gamers;'],
    loop:0,
  })

  return (
    <section
      className="w-full flex bg-dark-custom justify-center items-center relative"
      style={{ height: dynamicHeight, minHeight: 270}}
    >
      <div className="w-full h-full hidden lg:visible lg:block relative flex-shrink-0">
        <ParticleScene />
      </div>
      <div className="z-10 absolute inset-0 flex flex-col justify-center items-center">
        <div className="flex flex-col items-start ml-6">
          <h1 className="tituloFalopa sm:text-6xl md:text-8xl tracking-wider text-4xl star">mugencode</h1>
          <div className="flex flex-col items-start">
            <div className="md:ml-12 ml-4 w-16 md:w-[150px] h-[3px] mt-3 sm:mt-6 xl:mb-1 rounded bg-red-custom my-2"></div>
            <div className="md:ml-28 ml-10 w-16 md:w-[150px] h-[3px] mt-1 sm:mt-3 sm:mb-3 rounded bg-red-custom"></div>
          </div>
          <div className="ml-6 sm:text-xl text-base font-medium font-sourceCodePro mt-2 text-gray-custom">   
            <p>we are&nbsp;
              <span className="text-red-custom font-medium font-sourceCodePro">{text}</span>
              <Cursor/>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
