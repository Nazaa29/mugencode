import React from "react";
import ParticleScene from "./ParticleScene";

const Home = (props) => {
  const dynamicHeight = `calc(100vh - ${props.headerHeight}px)`;

  return (
    <section
      className="w-full flex bg-dark-custom justify-center items-center relative"
      style={{ height: dynamicHeight, minHeight: 270}}
    >
      <div className="w-full h-full relative flex-shrink-0">
        <ParticleScene />
      </div>
      <div className="z-10 absolute inset-0 flex flex-col justify-center items-center">
        <div className="flex flex-col items-start ml-6">
          <h1 className="sm:text-6xl md:text-7xl text-4xl">MUGENCODE ™</h1>
          <div className="flex flex-col items-start">
            <div className="ml-6 w-20 h-1 mt-2 rounded bg-red-custom my-2"></div>
            <div className="ml-12 w-20 h-1 mt-1 rounded bg-red-custom"></div>
          </div>
          <p className="ml-6 sm:text-xl text-lg font-semibold mt-2">Web Developers</p>
          <span>;</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
