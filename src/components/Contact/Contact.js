"use client";

import React, { useEffect, useRef, useState } from "react";
import Input from "../UI/Input";

import { load } from "recaptcha-v3";

export default function Contact() {
  const [recaptcha_token, setRecaptcha_token] = useState("");

  const getToken = async () => {
    const recaptcha = await load(process.env.NEXT_PUBLIC_SITE_KEY);

    const token = await recaptcha.execute("login");

    setRecaptcha_token(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    privacy: false,
  });

  const [errors, setErrors] = useState({});

  const privacyHandler = (e) => {
    const checked = e.target.checked;
    setFormData((prevState) => {
      return {
        ...prevState,
        ["privacy"]: checked,
      };
    });
  };
  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const submitHander = (e) => {
    e.preventDefault();
    setErrors({});
    //Validation
    if (!formData.name.trim()) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ["name"]: "Il campo nome è richiesto",
        };
      });
    }

    if (!formData.email.trim()) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ["email"]: "Il campo email è richiesto",
        };
      });
    } else if (!formData.email.trim().includes("@")) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ["email"]: "L'email non è valida",
        };
      });
    }

    if (!formData.privacy) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ["privacy"]: "Devi Accettare la privacy policy",
        };
      });
    }
    if (!Object.keys(errors).length > 0) {
      UIkit.notification("Compila i campi richiesti", {
        status: "danger",
        pos: "bottom-right",
      });
      return;
    } else {
      const url = "/api/sendEmail";
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            UIkit.notification("Messaggio Inviato", {
              status: "success",
              pos: "bottom-right",
            });
            e.target.reset();
          }
        })
        .catch((e) => {
          UIkit.notification("Si è verificato un errore", {
            status: "danger",
            pos: "bottom-right",
          });
        });
    }
  };

  return (
    <div
      className="contact-wrap uk-section uk-section-secondary uk-light uk-animation-fade"
      id="contact"
    >
      <div className="uk-container uk-container-small">
        <h2 className="uk-animation-slide-top-small">___Contattami</h2>
        <div className="form-wrap uk-animation-scale-up">
          <form action="" onSubmit={submitHander}>
            <div className="uk-grid">
              <div className="uk-width-1-2@s uk-margin">
                <Input
                  type="text"
                  label="Nome"
                  placeholder="Inserisci il tuo nome..."
                  ref={nameRef}
                  onChange={inputChange}
                  name="name"
                />
                {errors.name && (
                  <span className="uk-text-danger">{errors.name}</span>
                )}
              </div>
              <div className="uk-width-1-2@s">
                <Input
                  type="email"
                  label="Email"
                  placeholder="Inserisci la tua email..."
                  ref={emailRef}
                  onChange={inputChange}
                  name="email"
                />
                {errors.email && (
                  <span className="uk-text-danger">{errors.email}</span>
                )}
              </div>
              <div className="uk-width-1-1 uk-margin">
                <label htmlFor="message" className="uk-label">
                  Messaggio
                </label>
                <textarea
                  name="message"
                  className="uk-textarea"
                  cols="30"
                  rows="10"
                  placeholder="Parlami del tuo progetto..."
                  ref={messageRef}
                  onChange={inputChange}
                ></textarea>
              </div>
              <div className="uk-width-1-1">
                <input
                  type="checkbox"
                  name="privacy"
                  className="uk-checkbox uk-margin-small-right"
                  onChange={privacyHandler}
                />
                Ho letto e accetto la
                <a href="/privacy-policy"> Privacy Policy</a>
                {errors.privacy && (
                  <p className="uk-text-danger">{errors.privacy}</p>
                )}
              </div>
              <div className="uk-width-1-1 uk-margin">
                <div className="uk-text-center">
                  <button type="submit" className="uk-button uk-button-primary">
                    Invia
                  </button>
                </div>
                <div className="reacptacha">
                  <input
                    type="hidden"
                    name="recaptcha"
                    value={recaptcha_token}
                  />
                </div>
                <div className="uk-background-success uk-text-success"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
