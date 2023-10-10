"use-client";

import React from "react";
import foto from "../../../public/foto-michelangelo-bencivenga.jpg";

export default function Hero() {
  let contentAbout = [
    {
      label: "CLASSE",
      content: "1989",
    },
    {
      label: "TEL",
      content: (
        <a href="tel:+393920354531" target="_blank">
          +39 392 03 54 531
        </a>
      ),
    },
    {
      label: "EMAIL",
      content: (
        <a
          style={{ fontSize: "14px" }}
          href="mailto:info@mbencivenga.it"
          target="_blank"
        >
          infoATmbencivenga.it
        </a>
      ),
    },
    {
      label: "LOCATION",
      content: "Napoli",
    },
  ];

  let socials = [
    {
      social: "Linkedin",
      icon: <i className="fab fa-linkedin-in"></i>,
      link: "https://www.linkedin.com/in/michelangelo-bencivenga/",
    },
  ];

  let socialGridRender = socials.map((social) => {
    return (
      <div className="uk-padding" key={Math.random(0, 50)}>
        <a href={social.link} target="_blank">
          {social.icon}
        </a>
      </div>
    );
  });

  let contenAboutRender = contentAbout.map((content) => {
    return (
      <li key={Math.random(0, 50)}>
        <div className="uk-grid">
          <div className="uk-width-1-4">{content.label}</div>
          <div className="uk-width-3-4">{content.content}</div>
        </div>
      </li>
    );
  });
  return (
    <div className="hero-section uk-position-relative uk-section uk-section-secondary">
      <div className="background-off uk-background-primary uk-position-center"></div>
      <div className="uk-container uk-margin-medium-top">
        <div className="uk-grid uk-child-width-1-2@s uk-flex uk-flex-middle">
          <div>
            <div className="image-wrap uk-animation-slide-left-small">
              <img
                src={foto.src}
                alt="Foto Michelangelo Bencivenga"
                width={"1000px"}
                height={"667px"}
              />
            </div>
          </div>
          <div>
            <div className="uk-text-center uk-animation-scale-up">
              <h2 className="uk-margin-remove-bottom">
                Michelangelo Bencivenga
              </h2>
              <h4 className="uk-margin-remove-top uk-text-small">
                Web Developer/Wordpress Developer/Full Stack Developer
              </h4>
            </div>
            <div className="uk-margin">
              <div className="about-infos">
                <ul className="uk-list">{contenAboutRender}</ul>
              </div>
              <div className="about-socials">{socialGridRender}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
