import React from "react";
import Navbar from "./Navbar";
import { MenuItems } from "./menuitems.data";
import NavbarMobile from "./NavbarMobile";
import ModalDialogMobile from "./ModalDialogMobile";
import { useState } from "react";

export default function Header() {
  const [modalShow, setModalShow] = useState(false);
  const onOpenHandler = (bool) => {
    setModalShow(bool);
  };

  const onCloseHandler = (bool) => {
    setModalShow(bool);
  };
  return (
    <>
      <header className="header-mobile uk-hidden@l" uk-header="">
        <NavbarMobile onOpen={onOpenHandler} />
        {modalShow && (
          <ModalDialogMobile
            menuItems={MenuItems}
            onCloseHandler={onCloseHandler}
          />
        )}
      </header>
      <header className="header-desktop uk-visible@l" uk-header="">
        <Navbar menuItems={MenuItems} />
      </header>
    </>
  );
}
