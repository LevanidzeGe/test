"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; //  npm install --save @emailjs/browser
import styles from "./ContactForm.module.css";
import TopBorder from "../../components/borderShapes/TopBorder";
import BottomBorder from "../../components/borderShapes/BottomBorder";

interface FormValues {
  user_name: string;
  user_email: string;
  user_phone: string;
  user_date: string;
  user_time: string;
  user_quantity: string;
  message: string;
}

interface reservProps {
  name: string;
  email: string;
  phone: string;
  people: string;
  text: string;
  button: string;
  thank: string;
  title1: string;
  title2: string;
  title3: string;
}

export default function ContactForm({
  name,
  email,
  phone,
  text,
  button,
  thank,
  title1,
  title2,
  title3,
}: reservProps) {
  const [nameValue, setNameValue] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);

  const handleErrors = () => {
    setNameError(false);
    setEmailError(false);

    if (!nameValue) {
      setNameError(true);
    }
    if (!emailValue) {
      setEmailError(true);
    }
  };

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const data: FormValues = {
      user_name: formData.get("user_name"!) as string,
      user_email: formData.get("user_email") as string,
      user_phone: formData.get("user_phone") as string,
      user_date: formData.get("user_date") as string,
      user_time: formData.get("user_time") as string,
      user_quantity: formData.get("user_quantity") as string,
      message: formData.get("message") as string,
    };

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_FORM
      )
      .then(() => {
        handleEmailSent();
      });
  };

  return (
    <>
      <TopBorder />
      <section className="section section-medium no-padding-y">
        <div className="container ">
          <div className={styles.reservationWrapper}>
            <div className={styles.textDiv}>
              <div className="sideLineWrap">
                <div className="sideLine"></div>
                <h3 className="heading4">{title1}</h3>
              </div>
              <h4 className="heading2 color4">{title2}</h4>
              <p className="paragraph gray7">{title3}</p>
            </div>
            <div className={styles.reservation}>
              <form
                className={`${styles.form} ${emailSent ? styles.none : ""}`}
                ref={form}
                onSubmit={sendEmail}
              >
                <input
                  className={`${styles.input} ${styles.miniInput} ${
                    nameError ? styles.inputRed : ""
                  }`}
                  type="text"
                  name="user_name"
                  placeholder={name}
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                />
                <div>
                  <input
                    className={`${styles.input} ${styles.miniInput} ${
                      emailError ? styles.inputRed : ""
                    }`}
                    type="email"
                    name="user_email"
                    placeholder={email}
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                  <input
                    className={`${styles.input}`}
                    type="tel"
                    name="user_phone"
                    placeholder={phone}
                  />
                </div>

                <textarea
                  className={`${styles.textArea} ${styles.input}`}
                  name="message"
                  placeholder={text}
                />
                <button
                  type={nameValue && emailValue ? "submit" : "button"}
                  className={`button-reverse ${styles.button} ${
                    !buttonDisable ? "button" : "button1Disabled"
                  } w-full
                styles.buttonSend
              `}
                  onClick={
                    !nameValue || !emailValue
                      ? handleErrors
                      : () => setButtonDisable(true)
                  }
                >
                  {button}
                </button>
              </form>
              <div className={emailSent ? styles.formSent : styles.hide}>
                <h6>{thank}</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomBorder />
    </>
  );
}
