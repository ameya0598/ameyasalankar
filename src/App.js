import React from "react";
import NavBar from "./Navbar.js";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import ContactMe from "./Contact";
import Footer from "./Footer";

import "./App.css";
import "./Global.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="intro">
        <Intro />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="contactme">
        <ContactMe />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
