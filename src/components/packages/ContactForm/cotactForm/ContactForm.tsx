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
    if (!emailValue || !emailValue.includes("@")) {
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
    <div className="container">
      <div className={styles.contactWrapper}>
        <div className={styles.rightSide}>
          <form
            className={`${styles.form} ${emailSent ? styles.none : ""}`}
            ref={form}
            onSubmit={onSubmit}
          >
            <div className={styles.smallInputs}>
              <div className={styles.inputDiv}>
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
              </div>

              <div className={styles.inputDiv}>
                <input
                  className={`${styles.input} ${styles.miniInput}
             ${emailError ? `${styles.inputRed}  ${styles.emailInput}` : ""}
           `}
                  type="email"
                  name="user_email"
                  placeholder="Enter your email address"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.messageDiv}>
              <textarea
                className={`${styles.textArea} ${styles.input}
           ${messageError ? styles.inputRed : ""}
         `}
                name="message"
                placeholder="Enter our message "
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
              />
            </div>
            <button
              value="SEND"
              type={
                nameValue && messageValue && emailValue ? "submit" : "button"
              }
              className={` button ${styles.buttonSend} ${
                !buttonDisable ? "button" : "buttonDisabled"
              }  
            
          `}
              onClick={
                !nameValue || !messageValue || !emailValue.includes("@")
                  ? handleErrors
                  : () => setButtonDisable(true)
              }
            >
              Send
            </button>
          </form>
          <div className={emailSent ? styles.formSent : styles.hide}>
            <h6 className="header4"> Thank you for your message</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
