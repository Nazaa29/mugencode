import React from "react";
import gif from "../assets/images/coding.gif";

const About = () => {
  return (
    <div className="relative flex p-8 bg-gray-custom h-screen border-t border-black">
      {/* Línea vertical */}
      <div
        className="absolute top-8 bottom-0 left-14 w-0.5 bg-black w-1px"
      ></div>
      {/* Línea horizontal */}
      <div
        style={{ height: "1px" }}
        className="absolute top-16 left-24 right-24 h-0.5 bg-black"
      ></div>

      {/* Contenido */}
      <div className="absolute left-16 top-16">
        <h1 className="text-6xl font-bold uppercase mt-10 ml-7">About Us</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum
        </p>
      </div>

      {/* Gif */}
      <div className="absolute right-8 bottom-16">
        <img src={gif} alt="codigo" className="w-3/4" />
      </div>
    </div>
  );
};

export default About;
