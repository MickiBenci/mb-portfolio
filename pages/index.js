"use client";
import "@/assets/css/uikit.min.css";
import "@/assets/css/custom.min.css";
import Contact from "@/src/components/Contact/Contact";
import Hero from "@/src/components/Hero/Hero";
import Navbar from "@/src/components/Navbar/Navbar";
import Portfolio from "@/src/components/Portfolio/Portfolio";
import Stacks from "@/src/components/Skills/Stacks";
import { useEffect } from "react";
import logo from "@/public/logo-mb-webdesign.png";
import { useState } from "react";
import About from "@/src/components/About/About";

export default function index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoaded(true);
    }, 50);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {!loaded && (
        <div className="introPage">
          <div className="spinLogo">
            <img src={logo.src} alt="Logo MB Web Design" width="200" />
          </div>
        </div>
      )}
      {loaded && (
        <main
          className="uk-position-relative"
          uk-scrollspy="cls:uk-animation-fade"
        >
          <Navbar />
          <Hero />
          <About />
          <Stacks />
          <Portfolio />
          <Contact />
        </main>
      )}
    </>
  );
}
