"use-client";

import React from "react";
import foto from "../../public/foto-michelangelo-bencivenga.jpg";

export default function Hero() {
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
                __Michelangelo Bencivenga
              </h2>
              <h4 className="uk-margin-remove-top">
                Web Developer/Wordpress Developer
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
