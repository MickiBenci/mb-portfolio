import React from "react";
import { portfolios } from "./portfolios.data";
import SwitcherGridActions from "../UI/SwitcherGridActions";
import SwitcherGrid from "../UI/SwitcherGrid";

export default function Portfolio() {
  const categories = [];

  const seenCategories = {};

  portfolios.map((item) => {
    let cat = item.category.trim().replace(" ", "-").toLowerCase();
    if (!seenCategories[cat]) {
      categories.push({
        cat: cat,
        category: item.category,
      });
      seenCategories[cat] = true;
    }
  });
  return (
    <div
      id="portfolio"
      className="uk-section uk-section-muted uk-margin-medium-top"
      uk-scrollspy="cls:uk-animation-fade"
    >
      <div className="uk-container uk-animation-slide-top-medium">
        <h2 className="uk-heading-medium">Portfolio</h2>
        <div className="grid-portfolios uk-margin-medium-top">
          <div uk-filter="target: .js-filter">
            <SwitcherGridActions categories={categories} />
            <SwitcherGrid items={portfolios} />
          </div>
        </div>
      </div>
    </div>
  );
}
