import React from "react";

export default function SingleSkill({ id, label, percent }) {
  return (
    <div className="singleSkill uk-position-relative uk-margin-medium-bottom">
      <h4>{label}</h4>
      <div className="single-skill-fader-wrap uk-position-relative">
        <div className="single-skill-line"></div>
        <div
          className={"single-skill-fader"}
          id={"fader-" + id.replace(" ", "-").replace("/", "-")}
        >
          <div className="vert-line-wrap">
            <div className="vert-line">
              <span></span>
            </div>
            <div className="vert-line">
              <span></span>
            </div>
            <div className="vert-line">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
