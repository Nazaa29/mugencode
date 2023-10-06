import React from "react";
import ParticleScene from "./ParticleScene";

const Home = (props) => {
  const dynamicHeight = `calc(100vh - ${props.headerHeight}px)`;

  return (
    <section
      className="w-full flex bg-dark-custom justify-center items-center relative"
      style={{ height: dynamicHeight }}
    >
      <div className="w-full h-full relative flex-shrink-0">
        <ParticleScene />
      </div>
      <div className="z-10 absolute inset-0 flex flex-col justify-center items-center">
        <div className="flex flex-col items-start ml-6">
          <h1 className="text-7xl">MUGENCODE ™</h1>
          <div className="flex flex-col items-start">
            <div className="ml-6 w-20 h-1 mt-2 rounded bg-red-custom my-2"></div>
            <div className="ml-12 w-20 h-1 mt-1 rounded bg-red-custom"></div>
          </div>
          <p className="ml-6 text-xl font-semibold mt-2">Web Developers</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
