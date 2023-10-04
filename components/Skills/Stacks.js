import React from "react";
import { stacks } from "./stacks.data";

export default function Stacks() {
  return (
    <>
      <div className="uk-section uk-section-default">
        <div className="uk-container uk-text-center ">
          <h2 className="uk-heading-medium uk-margin-medium-bottom">
            ___Stacks
          </h2>
          <div
            className="uk-grid uk-child-width-1-5@m uk-child-width-1-2@s uk-grid-small grid-stacks"
            uk-grid=""
          >
            {stacks.map((item) => {
              const { name, logo } = item;
              return (
                <div>
                  <div className="uk-card uk-card-default uk-card-body uk-padding-small">
                    <div className="uk-card-media-top">
                      <img src={logo.src} alt={name} />
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
