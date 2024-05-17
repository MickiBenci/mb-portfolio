"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ModalDialogMobile(props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const onCloseHandler = (e) => {
    e.preventDefault();
    props.onCloseHandler();
  };

  const anchorHandler = (e) => {
    e.preventDefault();
    const href = e.target.href;
    props.onCloseHandler();
    window.location.href = href;
  };
  const menuItems = props.menuItems;
  return (
    <>
      {mounted &&
        createPortal(
          <div className="modal-menu-mobile">
            <button
              className="uk-icon uk-close uk-modal-close-default"
              type="button"
              uk-close=""
              aria-label="Close"
              onClick={onCloseHandler}
            ></button>
            <div className="body-modal-mobile">
              <ul className="uk-nav uk-nav-default">
                {menuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.permalink} onClick={anchorHandler}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>,
          document.getElementById("mobile-dialog"),
        )}
    </>
  );
}
