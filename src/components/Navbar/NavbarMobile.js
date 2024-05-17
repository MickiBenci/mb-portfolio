"use client";

import React, { useEffect, useState } from "react";
import logo from "@/public/logo-mb-webdesign.png";
import logoLight from "@/public/logo-mb-webdesign-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavbarMobile(props) {
  const MenuItems = props.menuItems;

  const [toTop, setToTop] = useState(0);

  const onScrollHandler = () => {
    let toTop = document.documentElement.scrollTop;

    setToTop(toTop);
  };

  const openModal = (e) => {
    e.preventDefault();
    props.onOpen();
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  let navbar_classes =
    toTop <= 100
      ? "uk-navbar-transparent uk-position-absolute uk-position-top uk-light"
      : "";

  let logo_src = toTop <= 100 ? logoLight : logo;
  return (
    <div>
      <div
        className={`uk-navbar-container sticky-navbar uk-position-z-index ${navbar_classes}`}
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
              <button
                className="toggle uk-button uk-button-link"
                onClick={openModal}
              >
                <FontAwesomeIcon icon={faBars} size={30} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
