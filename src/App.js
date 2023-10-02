import Header from "./components/Header";
import Home from "./components/Home";
import "./assets/styles/globals.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
