"use client";
import React, { useRef, useState } from "react";
import { sendEmail } from "./EmailService"; // npm install --save @emailjs/browser
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);

  const [nameValue, setNameValue] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageValue, setMessageValue] = useState<string>("");
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleErrors = () => {
    setNameError(false);
    setMessageError(false);
    setEmailError(false);

    if (!nameValue) {
      setNameError(true);
    }
    if (!emailValue) {
      setEmailError(true);
    }
    if (!messageValue) {
      setMessageError(true);
    }
  };

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  const onSubmit = sendEmail(form, handleEmailSent);

  return (
    <div className="container1">
      <div className={styles.formHead}>
        <h2 className="heading5 color1 ">Contact Us</h2>
        <h3 className="heading3 font1 ">For Better Experience</h3>
        <p className="twoLines"></p>
      </div>
      <form
        className={`${styles.form} ${emailSent ? styles.none : ""}`}
        ref={form}
        onSubmit={onSubmit}
      >
        <div className={styles.smallInputs}>
          <input
            className={`${styles.input} ${styles.miniInput} ${
              nameError ? styles.inputRed : ""
            }`}
            type="text"
            name="user_name"
            placeholder="Enter your full name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />

          <input
            className={`${styles.input} ${styles.miniInput}
             ${emailError ? styles.inputRed : ""}
           `}
            type="email"
            name="user_email"
            placeholder="Email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <textarea
          className={`${styles.textArea} ${styles.input}
           ${messageError ? styles.inputRed : ""}
         `}
          name="message"
          placeholder="Your message here"
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <button
          value="send"
          type={nameValue && messageValue && emailValue ? "submit" : "button"}
          className={`${!buttonDisable ? "button" : "button1Disabled"} w-full 
            ${styles.buttonSend}
          `}
          onClick={
            !nameValue || !messageValue || !emailValue
              ? handleErrors
              : () => setButtonDisable(true)
          }
        >
          Send
        </button>
      </form>
      <div className={emailSent ? styles.formSent : styles.hide}>
        <h6 className="heading3"> Thank you for your message</h6>
      </div>
    </div>
  );
};

export default ContactForm;
