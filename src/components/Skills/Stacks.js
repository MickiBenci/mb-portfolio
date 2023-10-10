import React from "react";
import { stacks } from "./stacks.data";
import Image from "next/image";

export default function Stacks() {
  return (
    <>
      <div
        className="uk-section uk-section-default"
        id="skills"
        uk-scrollspy="cls:uk-animation-fade"
      >
        <div className="uk-container uk-text-center ">
          <h2 className="uk-heading-medium uk-margin-medium-bottom">Stacks</h2>
          <div
            className="uk-grid uk-child-width-1-5@m uk-child-width-1-2 uk-grid-small grid-stacks"
            uk-grid=""
          >
            {stacks.map((item) => {
              const { name, logo } = item;
              return (
                <div key={Math.random(0, 50)}>
                  <div className="uk-card uk-card-default uk-card-body uk-padding-small">
                    <div className="uk-card-media-top">
                      <Image
                        src={logo.src}
                        width="150"
                        height="150"
                        alt={name}
                      />
                    </div>
                    <div className="uk-card-title uk-margin-medium-top">
                      <h5>{name}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
