"use client";
import "@/assets/css/uikit.min.css";
import "@/assets/css/custom.min.css";
import Contact from "@/src/components/Contact/Contact";
import Hero from "@/src/components/Hero/Hero";
import Portfolio from "@/src/components/Portfolio/Portfolio";
import Stacks from "@/src/components/Skills/Stacks";
import { useEffect } from "react";
import { useState } from "react";
import About from "@/src/components/About/About";

export default function Home() {
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
      <main
        className="uk-position-relative"
        uk-scrollspy="cls:uk-animation-fade"
      >
        <Hero />
        <About />
        <Stacks />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
