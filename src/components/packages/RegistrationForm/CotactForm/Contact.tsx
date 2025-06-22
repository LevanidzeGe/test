"use client";
import React, { useEffect, useRef, useState } from "react";
import { sendEmail } from "./EmailService";
import styles from "./Contact.module.css";
import { useLocale } from "next-intl";
import { contactFormValues, groupsData } from "../data/translations";
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
  const [participateCompetitionValue, setParticipateCompetitionValue] =
    useState("");
  type GroupKey = "" | "group1" | "group2" | "group3";
  const [groupValue, setGroupValue] = useState<GroupKey>("");

  const [messageValue, setMessageValue] = useState("");
  const [agreedTerms1, setAgreedTerms1] = useState(true);
  const [agreedTerms2, setAgreedTerms2] = useState(false);

  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");

  // Must fill
  const [surnameError, setSurnameError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [avsNumberError, setAvsNumberError] = useState(false);
  const [birthDateError, setBirthDateError] = useState(false);
  const [nationalityError, setNationalityError] = useState(false);
  const [participateCompetitionError, setParticipateCompetitionError] =
    useState(false);
  const [groupError, setGroupError] = useState(false);
  // const [messageError, setMessageError] = useState(false);
  const [agreedTerms1Error, setAgreedTerms1Error] = useState(false);
  const [agreedTerms2Error, setAgreedTerms2Error] = useState(false);

  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [selectedTimesError, setSelectedTimesError] = useState(false);

  const handleErrors = () => {
    setSurnameError(!surnameValue);
    setNameError(!nameValue);
    setAddressError(!addressValue);
    setEmailError(!emailValue || !emailValue.includes("@"));
    setPhoneError(!phoneValue);
    setAvsNumberError(!avsNumberValue);
    setBirthDateError(!birthDateValue);
    setNationalityError(!nationalityValue);
    setParticipateCompetitionError(!participateCompetitionValue);
    setGroupError(!groupValue);
    // setMessageError(!messageValue);
    // setAgreedTerms1Error(!agreedTerms1);
    setAgreedTerms2Error(!agreedTerms2);
  };

  const validateRequiredFields = () => {
    let hasError = false;

    setSurnameError(!surnameValue);
    if (!surnameValue) hasError = true;

    setNameError(!nameValue);
    if (!nameValue) hasError = true;

    setAddressError(!addressValue);
    if (!addressValue) hasError = true;

    setEmailError(!emailValue || !emailValue.includes("@"));
    if (!emailValue || !emailValue.includes("@")) hasError = true;

    setPhoneError(!phoneValue);
    if (!phoneValue) hasError = true;

    setAvsNumberError(!avsNumberValue);
    if (!avsNumberValue) hasError = true;

    setBirthDateError(!birthDateValue);
    if (!birthDateValue) hasError = true;

    setNationalityError(!nationalityValue);
    if (!nationalityValue) hasError = true;

    setParticipateCompetitionError(!participateCompetitionValue);
    if (!participateCompetitionValue) hasError = true;

    setGroupError(!groupValue);
    if (!groupValue) hasError = true;

    setAgreedTerms2Error(!agreedTerms2);
    if (!agreedTerms2) hasError = true;

    if (groupValue && selectedTimes.length === 0) {
      setSelectedTimesError(true);
      hasError = true;
    } else {
      setSelectedTimesError(false);
    }

    return !hasError;
  };

  const handleEmailSent = () => setEmailSent(true);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!form.current) return;
    sendEmail(form.current, handleEmailSent)(e);
  };

  useEffect(() => {
    setSelectedTimes([]); // Clear all checked times when group changes
  }, [groupValue]);

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
              name="user_surname"
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
              className={`${styles.input} ${
                addressError ? styles.inputRed : ""
              }`}
              type="text"
              name="user_address"
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
              className={`${styles.input} ${phoneError ? styles.inputRed : ""}`}
              type="tel"
              name="user_phone"
              placeholder={t.phone}
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
            />
          )}

          {avsNumber && (
            <input
              className={`${styles.input} ${
                avsNumberError ? styles.inputRed : ""
              }`}
              type="text"
              name="user_avs"
              placeholder={t.avsNumber}
              value={avsNumberValue}
              autoComplete="off"
              onChange={(e) => setAvsNumberValue(e.target.value)}
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
              className={`${styles.input} ${
                birthDateError ? styles.inputRed : ""
              }`}
              type="text"
              name="user_birthdate"
              placeholder={t.birthDate}
              value={birthDateValue}
              onChange={(e) => setBirthDateValue(e.target.value)}
            />
          )}
          {nationality && (
            <select
              className={`${styles.input} ${
                nationalityError ? styles.inputRed : ""
              }`}
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
              <option value="Oui">{t.yes}</option>
              <option value="Non">{t.no}</option>
            </select>
            <input
              type="hidden"
              name="competition_participation"
              value={participateCompetitionValue}
            />
          </label>
        )}
        {groups && (
          <label className="paragraph gray7">
            {t.groups}
            <select
              className={`${styles.input} ${groupError ? styles.inputRed : ""}`}
              value={groupValue}
              onChange={(e) => setGroupValue(e.target.value as GroupKey)}
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
            <input
              type="hidden"
              name="group_age"
              value={groupValue ? contactFormValues["fr"][groupValue] : ""}
            />
          </label>
        )}

        {/* Map checkboxes for the selected group's times */}
        {groupValue && groupsData[locale] && groupsData[locale][groupValue] && (
          <div>
            <div
              className={`paragraph  ${
                selectedTimesError ? "secondary6" : "gray7"
              }`}
            >
              {groupsData[locale].trainingDays}
            </div>
            <div className={styles.groupHours}>
              {groupsData[locale][groupValue].times.map((time) => (
                <label key={time} className="paragraph gray7">
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={selectedTimes.includes(time)}
                    onChange={() => {
                      setSelectedTimes((prev) =>
                        prev.includes(time)
                          ? prev.filter((t) => t !== time)
                          : [...prev, time]
                      );
                    }}
                  />
                  <span>{time}</span>
                </label>
              ))}
            </div>
            <input
              type="hidden"
              name="training_days"
              value={
                groupValue
                  ? groupsData.fr[groupValue].times
                      .filter((_, i) =>
                        selectedTimes.includes(
                          groupsData[locale][groupValue].times[i]
                        )
                      )
                      .join(", ")
                  : ""
              }
            />
          </div>
        )}

        {message && (
          <textarea
            className={`${styles.textArea} ${styles.input}`}
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
            <input
              type="hidden"
              name="photo_agreement"
              value={
                agreedTerms1
                  ? contactFormValues["fr"].yes
                  : contactFormValues["fr"].no
              }
            />
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
              <input
                type="hidden"
                name="feep_payment_agreement"
                value={
                  agreedTerms2
                    ? contactFormValues["fr"].yes
                    : contactFormValues["fr"].no
                }
              />
            </label>

            {agreedTerms2Error && (
              <div
                className="secondary6 paragraph"
                style={{ marginBottom: 8, fontSize: 13 }}
              >
                {t.mustAgree}
              </div>
            )}
          </div>
        )}
        <button
          type="submit"
          className={`button ${styles.buttonSend} ${
            !buttonDisable ? "button" : "buttonDisabled"
          }`}
          onClick={(e) => {
            // If not valid, prevent submission and show errors
            if (!validateRequiredFields()) {
              e.preventDefault();
              return;
            }
            setButtonDisable(true); // optionally prevent double submission
            // Allow submit (form onSubmit will handle sending)
          }}
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
