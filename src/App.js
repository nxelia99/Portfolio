import './App.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Skills} from "./components/Skills";
import React from "react";
import {Languages} from "./components/Languages";
import {Qualification} from "./components/qualification";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Languages />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
