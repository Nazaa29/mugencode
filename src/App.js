import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./assets/styles/globals.css";
import { Fragment } from "react";
import { useState } from "react";

function App() {

  const [headerHeight, setHeaderHeight] = useState(0);

  // Función para actualizar la altura del encabezado en App.js
  const handleHeaderHeightChange = (height) => {
    setHeaderHeight(height);
  };

  return (
    <Fragment>
      <Header onHeaderHeightChange={handleHeaderHeightChange} />
      <Home headerHeight={headerHeight}/>
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
