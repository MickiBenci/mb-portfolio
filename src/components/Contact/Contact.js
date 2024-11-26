"use client";

import React, { useEffect, useRef, useState } from "react";
import Input from "../UI/Input";
import { load } from "recaptcha-v3";
import Spinner from "../UI/Spinner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    privacy: false,
  });
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const getToken = async () => {
    try {
      const recaptcha = await load(process.env.NEXT_PUBLIC_SITE_KEY);
      const token = await recaptcha.execute("login");
      setRecaptchaToken(token);
    } catch (error) {
      console.error("Errore durante il caricamento di reCAPTCHA:", error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePrivacyChange = (e) => {
    const checked = e.target.checked;
    setFormData((prevState) => ({
      ...prevState,
      privacy: checked,
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Il campo nome è richiesto";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Il campo email è richiesto";
    } else if (!formData.email.includes("@")) {
      validationErrors.email = "L'email non è valida";
    }

    if (!formData.privacy) {
      validationErrors.privacy = "Devi accettare la privacy policy";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      UIkit.notification("Compila i campi richiesti", {
        status: "danger",
        pos: "bottom-right",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptcha: recaptchaToken }),
      });

      const data = await response.json();

      if (data.success) {
        UIkit.notification("Messaggio inviato", {
          status: "success",
          pos: "bottom-right",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
          privacy: false,
        });
        e.target.reset();
      } else {
        throw new Error(data.message || "Errore durante l'invio");
      }
    } catch (error) {
      console.error(error);
      UIkit.notification("Si è verificato un errore", {
        status: "danger",
        pos: "bottom-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="contact-wrap uk-section uk-section-secondary uk-light uk-animation-fade"
      id="contact"
    >
      <div className="uk-container uk-container-small">
        <h2 className="uk-animation-slide-top-small uk-heading-medium">
          Contattami
        </h2>
        <div className="form-wrap uk-animation-scale-up">
          <form onSubmit={handleSubmit}>
            <div className="uk-grid">
              <div className="uk-width-1-2@s uk-margin">
                <Input
                  type="text"
                  label="Nome"
                  placeholder="Inserisci il tuo nome..."
                  ref={nameRef}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="uk-width-1-1">
                <input
                  type="checkbox"
                  name="privacy"
                  className="uk-checkbox uk-margin-small-right"
                  onChange={handlePrivacyChange}
                />
                Ho letto e accetto la
                <a href="/privacy-policy"> Privacy Policy</a>
                {errors.privacy && (
                  <p className="uk-text-danger">{errors.privacy}</p>
                )}
              </div>
              <div className="uk-width-1-1 uk-margin">
                <div className="uk-text-center">
                  <button
                    type="submit"
                    className={
                      isLoading
                        ? "uk-button uk-button-primary inline-flex"
                        : "uk-button uk-button-primary"
                    }
                  >
                    Invia {isLoading && <Spinner />}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
