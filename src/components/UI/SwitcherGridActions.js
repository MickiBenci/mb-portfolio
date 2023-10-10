import React from "react";

export default function SwitcherGridActions(props) {
  const { categories } = props;
  return (
    <div className="uk-margin-medium-bottom">
      <ul className="uk-subnav uk-subnav-pill">
        <li uk-filter-control="">
          <a href="#">All</a>
        </li>
        {categories.map((item) => {
          const { cat, category } = item;
          return (
            <li uk-filter-control={`.tag-${cat}`} key={`.tag-${cat}`}>
              <a href="#">{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
