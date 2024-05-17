import React, { useEffect, useRef, useState } from "react";

export default function SwitcherGridActions(props) {
  const { categories, catChange } = props;
  const [catSelected, setCatSelected] = useState("all");

  const switchItemRef = useRef();
  const handleSelection = (e) => {
    e.preventDefault();

    const current = e.target;

    if (!current) {
      return;
    }
    const cat = current.getAttribute("data-cat");
    setCatSelected(cat);
    catChange(cat);
  };

  const activeAllClass = catSelected === "all" ? "uk-active" : "";

  useEffect(() => {
    console.log(catSelected);
  }, [catSelected]);

  return (
    <div className="uk-margin-medium-bottom">
      <ul className="uk-subnav uk-subnav-pill">
        <li className={activeAllClass}>
          <a
            href="#"
            ref={switchItemRef}
            data-cat={"all"}
            onClick={handleSelection}
          >
            All
          </a>
        </li>
        {categories.map((item) => {
          const { cat, category } = item;
          const activeClass = catSelected === cat ? "uk-active" : "";
          return (
            <li key={cat} className={activeClass}>
              <a
                href="#"
                ref={switchItemRef}
                data-cat={cat}
                onClick={handleSelection}
              >
                {category}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
