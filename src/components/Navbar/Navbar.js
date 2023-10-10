"use client";

import React, { useState } from "react";
import logo from "@/public/logo-mb-webdesign.png";
import logoLight from "@/public/logo-mb-webdesign-light.png";

export default function Navbar() {
  const [toTop, setToTop] = useState(0);

  const onScrollHandler = () => {
    let toTop = document.documentElement.scrollTop;

    setToTop(toTop);
  };

  window.addEventListener("scroll", onScrollHandler);

  const MenuItems = [
    {
      label: "Home",
      permalink: "/",
    },
    {
      label: "About",
      permalink: "/#about",
    },
    {
      label: "Skills",
      permalink: "/#skills",
    },
    {
      label: "Portfolio",
      permalink: "/#portfolio",
    },
    {
      label: "Contact",
      permalink: "/#contact",
    },
  ];
  let navbar_classes =
    toTop <= 100
      ? "uk-navbar-transparent uk-position-absolute uk-position-top uk-light"
      : "";

  let logo_src = toTop <= 100 ? logoLight : logo;
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <div
        className={`uk-navbar-container uk-position-z-index ${navbar_classes}`}
      >
        <div className="uk-container">
          <nav className="uk-navbar">
            <div className="uk-navbar-left">
              <a
                className="uk-navbar-item uk-logo"
                href="/"
                aria-label="Back to Home"
              >
                <img
                  src={logo_src.src}
                  alt="Logo MB Web Design"
                  className="uk-logo"
                  width="70"
                />
              </a>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.permalink} uk-scroll="true">
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
