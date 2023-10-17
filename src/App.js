import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Proyects/Projects";
import Contact from "./components/Contact/Contact";
import "./assets/styles/globals.css";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  // Función para actualizar la altura del encabezado en App.js
  const handleHeaderHeightChange = (height) => {
    setHeaderHeight(height);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header onHeaderHeightChange={handleHeaderHeightChange} />
      <Home headerHeight={headerHeight} />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
