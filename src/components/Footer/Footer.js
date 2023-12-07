import RevealHorizontal from "../UI/RevealHorizontal";
import React, { useState, useEffect } from "react";

export default function Footer() {
  const [showVerticalLine, setShowVerticalLine] = useState(
    window.innerWidth > 640
  );

  useEffect(() => {
    const handleResize = () => setShowVerticalLine(window.innerWidth > 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="w-full relative bg-[#171717] h-fit">
      <div
        className="absolute top-0 bottom-[84.5px] sm:bottom-[89px] md:sm:bottom-[92px] left-8 md:left-14 bg-red-custom w-1px"
        style={{ display: showVerticalLine ? "block" : "none" }}
      ></div>
      <p className="w-screen border-b-[1px] text-xs sm:text-base  border-b-red-custom pt-8 lg:pr-2 pb-4 bg-dark-custom text-gray-custom font-workSans text-center">
        contact@mugencode.com
      </p>
      <RevealHorizontal>
        <div className=" ml-[6px] flex pt-4 pb-2 text-sm sm:text-base sm:pr-[21px] justify-center sm:justify-end">
          <p className="text-center font-sourceCodePro text-gray-custom">
            &lt;nazitaOg&gt;
          </p>
          <p className=" text-center ml-1 text-gray-custom font-sourceCodePro">
            &lt;/OriginalKazdov&gt;
          </p>
        </div>
      </RevealHorizontal>

      <p className="w-screen pb-4 text-gray-custom  text-base lg:text-lg font-bolder text-center sm:text-end sm:pr-10 font-workSans">
        2023 Mugencode ™
      </p>
    </footer>
  );
}
