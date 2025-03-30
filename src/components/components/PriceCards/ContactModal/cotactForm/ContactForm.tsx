"use client";
import React, { useRef, useState } from "react";
import { sendEmail } from "./EmailService"; // npm install --save @emailjs/browser
import styles from "./ContactForm.module.css";

type ContactFormProps = {
  plan: string;
  budget: string;
  head1: string;
  head2: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  quantity: string;
  message: string;
  button: string;
  send: string;
  thankYou: string;
  comfirmation: string; // (typo?) consider renaming to confirmation
};

const ContactForm: React.FC<ContactFormProps> = ({
  phone,
  plan,
  budget,
  name,
  email,
  message,
  button,
  thankYou,
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const [planValue, setPlanValue] = useState("");
  const [budgetValue, setBudgetValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [messageError, setMessageError] = useState(false);

  const handleErrors = () => {
    setNameError(!nameValue);
    setEmailError(!emailValue || !emailValue.includes("@"));
    setMessageError(!messageValue);
  };

  const handleEmailSent = () => {
    setEmailSent(true);
  };
  const onSubmit = form.current
    ? sendEmail(form.current, handleEmailSent)
    : () => {};

  return (
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
                className={`${styles.input} ${styles.miniInput} `}
                type="text"
                name="budget"
                placeholder={budget || "CHF 2500"}
                value={budgetValue || budget}
                onChange={(e) => setBudgetValue(e.target.value)}
              />
            </div>

            <div className={styles.inputDiv}>
              <input
                className={`${styles.input} ${styles.miniInput} `}
                type="text"
                name="plan"
                placeholder={plan}
                value={plan}
                onChange={(e) => setPlanValue(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.smallInputs}>
            <div className={styles.inputDiv}>
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
            </div>

            <div className={styles.inputDiv}>
              <input
                className={`${styles.input} ${styles.miniInput} ${
                  emailError ? `${styles.inputRed} ${styles.emailInput}` : ""
                }`}
                type="email"
                name="user_email"
                placeholder={email}
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
          </div>

          <input
            className={`${styles.input}  `}
            type="tel"
            name="user_phone"
            placeholder={phone}
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
          />

          <div className={styles.messageDiv}>
            <textarea
              className={`${styles.textArea} ${styles.input} ${
                messageError ? styles.inputRed : ""
              }`}
              name="message"
              placeholder={message}
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
            />
          </div>

          <button
            type={
              nameValue && messageValue && emailValue.includes("@")
                ? "submit"
                : "button"
            }
            className={`button ${styles.buttonSend} ${
              !buttonDisable ? "button" : "buttonDisabled"
            }`}
            onClick={
              !nameValue || !messageValue || !emailValue.includes("@")
                ? handleErrors
                : () => setButtonDisable(true)
            }
          >
            {button}
          </button>
        </form>

        <div className={emailSent ? styles.formSent : styles.hide}>
          <h6 className="heading4 blue1">{thankYou}</h6>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
