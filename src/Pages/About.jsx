import React from "react";
import Navbar from "../Components/Navbar";
import "../index.css";
import Skills from "../Components/Skills";
import Projekt from "../Components/Projekt";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <div className="font-sora">
        <Navbar />
        <div className="w-3/4 mx-auto mt-20 flex flex-col items-center gap-4 justify-center p-4">
          <h1 className="text-7xl">Md. Aosaf Ibad Chowdhury</h1>
          <div className="inline-block">
            <p className="text-4xl role">Front End Developer</p>
          </div>
        </div>
       <Skills />
       <Projekt />
       <Footer />
      </div>
    </>
  );
};

export default About;
