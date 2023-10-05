import React from "react";
import ParticleScene from "./ParticleScene"; // Asegúrate de que la ruta de importación sea correcta

const Home = (props) => {
  const dynamicHeight = `calc(100vh - ${props.headerHeight}px)`;

  return (
    <section
      className="w-full flex bg-dark-custom justify-center items-center relative" // Agrega la clase 'relative'
      style={{ height: dynamicHeight }}
    >
      <div className="w-full h-full relative flex-shrink-0">
        <ParticleScene />
      </div>
      <div className="z-10 absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-7xl">MUGENCODE ™</h1>
        <div className="flex flex-col items-start">
          <div className="w-20 ml-6 h-1 mt-2 rounded bg-red-custom my-2"></div>
          <div className="w-20 ml-16 h-1 mt-1 rounded bg-red-custom"></div>
        </div>
        <p className="ml-6 mt-2 text-xl font-semibold">Web Developers</p>
      </div>
    </section>
  );
};

export default Home;
