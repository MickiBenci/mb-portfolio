"use client";
import React from "react";
import SingleSkill from "./SingleSkill";
import AboutContent from "./AboutContent";
import { skills } from "./skills.data";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import anime from "animejs";

export default function About() {
  const { ref, inView, entry } = useInView();
  useEffect(() => {
    if (entry && entry.isIntersecting) {
      skills.forEach((skill) => {
        let animation = anime({
          targets: "#fader-" + skill.label.replace(" ", "-").replace("/", "-"),
          left: skill.percent,
          duration: 500,
          easing: "linear",
        });
      });
    }
  }, [entry]);
  return (
    <div className="uk-section uk-section-primary" id="about">
      <div className="uk-container" uk-scrollspy="cls:uk-animation-scale-up">
        <h2 className="uk-heading-medium">About</h2>
        <div className="uk-grid uk-child-width-1-2@s uk-grid-margin">
          <div
            className="bio-content uk-margin-small-top uk-text-justify uk-margin-medium-top"
            uk-scrollspy="cls:uk-animation-slide-top-small"
          >
            <AboutContent />
          </div>
          <div
            className="about-skills uk-text-center uk-margin-medium-top"
            ref={ref}
          >
            <h3 className="uk-heading-medium">Skills</h3>
            <div
              className="skills-container uk-margin-auto@s uk-grid uk-child-width-1-2@s uk-grid-margin"
              uk-scrollspy="cls:uk-animation-slide-left-small"
            >
              {skills.map((item) => {
                return (
                  <SingleSkill
                    label={item.label}
                    id={item.label}
                    percent={item.percent}
                    key={Math.random(0, 50)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
