"use client";
import React, { useRef, useState } from "react";
import { sendEmail } from "./EmailService";
import styles from "./Contact.module.css";
import { useLocale } from "next-intl";
import { contactFormValues } from "../data/translations";
import { unMemberCountries } from "../data/unMemberCountries";
export interface ContactFormProps {
  title1?: string;
  userName?: boolean;
  userSurname?: boolean;
  userEmail?: boolean;
  phone?: boolean;
  date?: boolean;
  birth?: boolean;
  time?: boolean;
  address?: boolean;
  quantity?: boolean;
  message?: boolean;
  comfirmation?: boolean;
  nationality?: boolean;
  avsNumber?: boolean;
  boolean?: boolean;
  terms1?: boolean;
  groups?: boolean;
  terms2?: boolean;
}

const Register: React.FC<ContactFormProps> = ({
  userName,
  userSurname,
  userEmail,
  phone,
  date,
  time,
  quantity,
  message,
  comfirmation,
  address,
  nationality,
  avsNumber,
  birth,
  boolean,
  terms1,
  terms2,
  groups,
}) => {
  const locale = useLocale() as keyof typeof contactFormValues;
  const t = contactFormValues[locale];

  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const [surnameValue, setSurnameValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [avsNumberValue, setAvsNumberValue] = useState("");
  const [birthDateValue, setBirthDateValue] = useState("");
  const [nationalityValue, setNationalityValue] = useState("");

  const [messageValue, setMessageValue] = useState("");
  const [participationValue, setParticipationValue] = useState("");
  const [studyGroupValue, setStudyGroupValue] = useState("");
  // const [dateValue, setDateValue] = useState("");
  // const [timeValue, setTimeValue] = useState("");
  // const [quantityValue, setQuantityValue] = useState("");

  const [surnameError, setSurnameError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [agreedTerms1, setAgreedTerms1] = useState(true);
  const [agreedTerms1Error, setAgreedTerms1Error] = useState(false);

  const [agreedTerms2, setAgreedTerms2] = useState(false);
  const [agreedTerms2Error, setAgreedTerms2Error] = useState(false);

  const [participateCompetitionValue, setParticipateCompetitionValue] =
    useState("");
  const [participateCompetitionError, setParticipateCompetitionError] =
    useState(false);

  const [groupValue, setGroupValue] = useState("");
  const [groupError, setGroupError] = useState(false);

  const handleErrors = () => {
    setNameError(!nameValue);
    setSurnameError(!surnameValue);
    setEmailError(!emailValue || !emailValue.includes("@"));
    setMessageError(!messageValue);
  };

  const handleEmailSent = () => setEmailSent(true);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!form.current) return;
    sendEmail(form.current, handleEmailSent)(e);
  };

  return (
    <div className={""}>
      <form
        className={`${styles.form} ${emailSent ? styles.none : ""}`}
        ref={form}
        onSubmit={onSubmit}
      >
        <div className={styles.inputGroup}>
          {userSurname && (
            <input
              className={`${styles.input} ${
                surnameError ? styles.inputRed : ""
              }`}
              type="text"
              name="user_name"
              placeholder={t.surname}
              value={surnameValue}
              onChange={(e) => setSurnameValue(e.target.value)}
            />
          )}
          {userName && (
            <input
              className={`${styles.input} ${nameError ? styles.inputRed : ""}`}
              type="text"
              name="user_name"
              placeholder={t.name}
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
          )}
          {address && (
            <input
              className={`${styles.input}`}
              type="text"
              name="user_name"
              placeholder={t.address}
              value={addressValue}
              onChange={(e) => setAddressValue(e.target.value)}
            />
          )}
          {userEmail && (
            <input
              className={`${styles.input} ${emailError ? styles.inputRed : ""}`}
              type="email"
              name="user_email"
              placeholder={t.email}
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          )}
          {phone && (
            <input
              className={styles.input}
              type="tel"
              name="user_phone"
              placeholder={t.phone}
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
            />
          )}

          {avsNumber && (
            <input
              className={styles.input}
              type="text"
              name="user_phone"
              placeholder={t.avsNumber}
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
            />
          )}

          {date && (
            <input
              className={styles.input}
              type="date"
              name="user_date"
              placeholder={t.date}
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
            />
          )}
          {birth && (
            <input
              className={styles.input}
              type="text"
              name="user_date"
              placeholder={t.birthDate}
              value={birthDateValue}
              onChange={(e) => setBirthDateValue(e.target.value)}
            />
          )}
          {nationality && (
            <select
              className={`${styles.input}`}
              name="user_nationality"
              value={nationalityValue}
              onChange={(e) => setNationalityValue(e.target.value)}
            >
              <option value="">{t.nationality}</option>
              {unMemberCountries.map((country, index) => (
                <option value={country} key={index}>
                  {country}
                </option>
              ))}
            </select>
          )}

          {time && (
            <input
              className={styles.input}
              type="time"
              name="user_time"
              placeholder={t.time}
              value={timeValue}
              onChange={(e) => setTimeValue(e.target.value)}
            />
          )}

          {quantity && (
            <input
              className={styles.input}
              type="number"
              name="user_quantity"
              placeholder={t.quantity}
              value={quantityValue}
              onChange={(e) => setQuantityValue(e.target.value)}
            />
          )}
        </div>
        {boolean && (
          <label className="paragraph gray7">
            {t.participateCompetition}
            <select
              className={`${styles.input} ${
                participateCompetitionError ? styles.inputRed : ""
              }`}
              value={participateCompetitionValue}
              onChange={(e) => {
                setParticipateCompetitionValue(e.target.value);
                setParticipateCompetitionError(false);
              }}
            >
              <option value="">{t.choose}</option>
              <option value="yes">{t.yes}</option>
              <option value="no">{t.no}</option>
            </select>
          </label>
        )}
        {groups && (
          <label className="paragraph gray7">
            {t.groups}
            <select
              className={`${styles.input} ${groupError ? styles.inputRed : ""}`}
              value={groupValue}
              onChange={(e) => {
                setGroupValue(e.target.value);
                setGroupError(false);
              }}
            >
              <option value="">{t.choose}</option>
              <option value="group1">
                {t.group1} {t.age}
              </option>
              <option value="group2">
                {t.group2} {t.age}
              </option>
              <option value="group3">
                {t.group3} {t.age}
              </option>
            </select>
            {groupError && <div className={styles.inputRed}>{t.choose}</div>}
            {groupValue && (t.groupHours as any)[groupValue] && (
              <div className="primary4">
                {(t.groupHours as any)[groupValue]}
              </div>
            )}
          </label>
        )}

        {message && (
          <textarea
            className={`${styles.textArea} ${styles.input} ${
              messageError ? styles.inputRed : ""
            }`}
            name="message"
            placeholder={t.message}
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
          />
        )}
        {terms1 && (
          <div className={styles.checkboxRow}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="terms1"
              checked={agreedTerms1}
              onChange={() => {
                setAgreedTerms1(!agreedTerms1);
                setAgreedTerms1Error(false);
              }}
            />
            <label htmlFor="terms1" className={styles.checkboxLabel}>
              {t.termsConditions1}
            </label>
            {agreedTerms1Error && (
              <div
                className={styles.inputRed}
                style={{ marginBottom: 8, fontSize: 13 }}
              >
                {t.mustAgree}
              </div>
            )}
          </div>
        )}
        {terms2 && (
          <div className={styles.checkboxRow}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="terms2"
              checked={agreedTerms2}
              onChange={() => {
                setAgreedTerms2(!agreedTerms2);
                setAgreedTerms2Error(false);
              }}
            />
            <label htmlFor="terms2" className={styles.checkboxLabel}>
              {t.termsConditions2}
            </label>
            {agreedTerms2Error && (
              <div
                className={styles.inputRed}
                style={{ marginBottom: 8, fontSize: 13 }}
              >
                {t.mustAgree}
              </div>
            )}
          </div>
        )}
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
          {t.button}
        </button>
      </form>
      {emailSent && (
        <div className={styles.formSent}>
          <h6 className="heading4">{t.thankYou}</h6>
          {comfirmation && <p className="paragraph">{t.comfirmation}</p>}
        </div>
      )}
    </div>
  );
};

export default Register;
