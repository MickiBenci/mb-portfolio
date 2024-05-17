"use client";
import React, { useEffect, useState } from "react";

function CookieConsentBar() {
  const [cookieTouched, setCookieTouched] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setCookieTouched(true);
      if (consent === "true") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "consentGiven",
        });
      }
    }
  }, []);

  const onAcceptHandle = (e) => {
    e.preventDefault();
    localStorage.setItem("cookieConsent", "true");
    setCookieTouched(true);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consentGiven",
    });
  };
  const onDenyHandle = (e) => {
    e.preventDefault();
    setCookieTouched(true);
    localStorage.setItem("cookieConsent", "false");
  };
  return (
    <>
      {!cookieTouched && (
        <div className="uk-position-fixed uk-position-bottom uk-section uk-section-secondary uk-light">
          <div className="uk-container uk-container-small">
            <div className="uk-grid uk-flex-middle">
              <div className="cookie-content uk-width-2-3@m">
                Questo sito utilizza i cookie per offrirti un'esperienza
                migliore di navigazione. I cookie sono piccoli file di testo che
                vengono memorizzati sul tuo dispositivo quando visiti un sito
                web. Utilizziamo i cookie per garantire il corretto
                funzionamento del sito, per migliorare la tua esperienza di
                navigazione e per fini statistici.
              </div>
              <div className="cookie-actions uk-width-1-3@m uk-flex uk-flex-between">
                <div>
                  <button
                    className="uk-button uk-button-primary"
                    onClick={onAcceptHandle}
                  >
                    Accetta
                  </button>
                </div>
                <div>
                  <button
                    onClick={onDenyHandle}
                    className="uk-button uk-button-secondary"
                  >
                    Rifiuta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieConsentBar;
