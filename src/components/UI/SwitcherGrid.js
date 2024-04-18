import React from "react";

export default function SwitcherGrid(props) {
  const { items } = props;
  return (
    <ul
      className="uk-child-width-1-2 uk-child-width-1-4@m uk-text-center uk-grid uk-grid-small"
      uk-grid="masonry: pack"
    >
      {items.map((item) => {
        return (
          <li key={Math.random(0, 50)} uk-scrollspy="cls:uk-animation-scale-up">
            <a
              href={item.url}
              className="uk-link-toggle uk-display-block"
              target="_blank"
            >
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top card-portolio-img">
                  <img src={item.logo} width="1800" height="1200" alt="" />
                </div>
                <div className="uk-card-body">
                  <h4 className="uk-card-title">{item.name}</h4>
                </div>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
