"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/logo-mb-webdesign.png";

function Footer() {
  return (
    <div id="footer" className="uk-section uk-section-default">
      <div className="uk-text-center uk-container uk-container-small">
        <Image
          src={logo.src}
          width={150}
          height={150}
          className="uk-animation-slide-top-small"
          alt="Logo MB Web Design"
        />
        <p className="uk-animation-scale-up">
          Michelangelo Bencivenga
          <br />
          Via Camillo Daniele 92, Cardito 80024 - NA <br />
          P.Iva: 09732371217 <br />
          Email:{" "}
          <a
            href="mailto:info@mbencivenga.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            infoATmbencivenga.it
          </a>{" "}
        </p>
        <br />
        <ul className="uk-subnav uk-subnav-divider uk-flex-center uk-animation-slide-bottom-small">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/cookie-policy">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
