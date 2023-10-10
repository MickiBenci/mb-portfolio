import React from "react";
import ReactDOM from "react-dom";

export default function ModalDialogMobile(props) {
  const onCloseHandler = (e) => {
    e.preventDefault();
    props.onCloseHandler(false);
  };

  const anchorHandler = (e) => {
    e.preventDefault();
    const href = e.target.href;
    props.onCloseHandler(false);
    window.location.href = href;
  };
  const menuItems = props.menuItems;
  return (
    <>
      {ReactDOM.createPortal(
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
                    <a
                      href={item.permalink}
                      uk-scroll="true"
                      onClick={anchorHandler}
                    >
                      {item.label}
                    </a>
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
