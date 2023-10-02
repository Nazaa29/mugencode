import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./assets/styles/globals.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
