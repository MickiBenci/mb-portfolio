"use client";

import React, { useState } from "react";
import logo from "@/public/logo-mb-webdesign.png";
import logoLight from "@/public/logo-mb-webdesign-light.png";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(props) {
  const MenuItems = props.menuItems;

  const [toTop, setToTop] = useState(0);

  const onScrollHandler = () => {
    let toTop = document.documentElement.scrollTop;

    setToTop(toTop);
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
              <Link href="/" className="uk-navbar-item uk-logo">
                <Image
                  src={logo_src}
                  width={70}
                  height={70}
                  className="uk-animation-slide-top-small"
                  alt="Logo MB Web Design"
                />
              </Link>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.permalink}
                        className="uk-navbar-item uk-logo"
                      >
                        {item.label}
                      </Link>
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
