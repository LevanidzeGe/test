"use client";
import React, { useRef, useState } from "react";
import { sendEmail } from "./EmailService";
import styles from "./Contact.module.css";
import { useLocale } from "next-intl";
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
const contactFormValues = {
  fr: {
    surname: "Nom", // client: Nom *
    name: "Prénom", // client: Prénom *
    email: "Email", // client: Email *
    phone: "N° Téléphone", // client: N° Téléphone *
    address: "Adresse", // client: Adresse *
    nationality: "Nationalité", // client: Nationalité *
    avsNumber: "Numéro AVS", // client: Numéro AVS *
    birthDate: "Date de naissance - JJ/MM/AAAA",
    termsConditions1:
      "J’autorise le Club de Judo à prendre des photos durant les manifestations et entraînements et à utiliser uniquement dans le cadre de supports liés au club (site internet, plaquettes, journaux, publications etc…)", // client: photo permission *
    termsConditions2:
      "En inscrivant votre enfant au Judo Club Geo de Genève, vous vous engagez à régler l'intégralité de la cotisation annuelle à compter du jour de l'inscription de votre enfant. La facilité de paiement en plusieurs fois, ne dispense en aucun cas du règlement de la cotisation annuelle.", // client: fee rule *
    mustAgree: "Vous devez accepter pour continuer", // improved for French users
    yes: "Oui",
    no: "Non",
    choose: "Choisissez...",
    participateCompetition: "Pratique de la compétition", // client: Pratique de la compétition *
    groups: "Groupe d'étude", // (kept for your use)
    age: "Âge", // (kept for your use)
    group1: "4-6 ans",
    group2: "7-14 ans",
    group3: "14+ & 18+ ans",

    date: "Date", // (extra/kept)
    time: "Heure", // (extra/kept)
    quantity: "Nombre de pièces", // (extra/kept)
    message: "Message (optionnel)", // client: Message (so people can write some additional info if they want)
    button: "Envoyer",
    send: "Envoyer la demande",
    thankYou: "Merci pour votre message !",
    comfirmation: "Je vous répondrai dès que possible.",
  },
  en: {
    surname: "Surname", // client: Surname *
    name: "First name", // client: First name *
    email: "Email", // client: Email *
    phone: "Phone number", // client: Phone number *
    address: "Address", // client: Address *
    nationality: "Nationality", // client: Nationality *
    avsNumber: "AVS Number", // client: AVS Number *
    birthDate: "Date of birth - DD/MM/YYYY", // client: Date of birth *. DAY MONTH YEAR
    termsConditions1:
      "I authorize the Judo Club to take photos during events and training sessions and to use them exclusively for club-related materials (website, brochures, newspapers, publications, etc.)", // client: photo permission *
    termsConditions2:
      "By registering your child at Judo Club Geo de Genève, you agree to pay the full annual membership fee from the day of registration. Payment in installments does not exempt you from settling the full annual fee.", // client: fee rule *
    mustAgree: "You must agree to continue", // improved for English users
    yes: "Yes",
    no: "No",
    choose: "Choose...",
    participateCompetition: "Competition participation", // client: Do you want your child to participate in competitions?
    groups: "Study group", // (kept for your use)
    age: "Age", // (kept for your use)
    group1: "4-6 years",
    group2: "7-14 years",
    group3: "14+ & 18+ years",

    date: "Date", // (extra/kept)
    time: "Time", // (extra/kept)
    quantity: "Number of rooms", // (extra/kept)
    message: "Message (optional)", // client: Message (so people can write some additional info if they want)
    button: "Send",
    send: "Send request",
    thankYou: "Thank you for your message!",
    comfirmation: "I will get back to you as soon as possible.",
  },

  de: {
    surname: "Nachname", // client: Nachname *
    name: "Vorname", // client: Vorname *
    email: "E-Mail", // client: E-Mail *
    phone: "Telefonnummer", // client: Telefonnummer *
    address: "Adresse", // client: Adresse *
    nationality: "Staatsangehörigkeit", // client: Staatsangehörigkeit *
    avsNumber: "AHV-Nummer", // client: AHV-Nummer *
    birthDate: "Geburtsdatum - TT/MM/JJJJ", // client: Geburtsdatum *. TAG MONAT JAHR
    termsConditions1:
      "Ich erlaube dem Judo-Club, während Veranstaltungen und Trainings Fotos zu machen und diese ausschließlich für vereinsbezogene Materialien zu verwenden (Website, Broschüren, Zeitungen, Veröffentlichungen usw.)", // client: Fotogenehmigung *
    termsConditions2:
      "Mit der Anmeldung Ihres Kindes beim Judo Club Geo de Genève verpflichten Sie sich, den gesamten Jahresbeitrag ab dem Tag der Anmeldung zu zahlen. Die Möglichkeit der Ratenzahlung entbindet in keinem Fall von der Zahlung des gesamten Jahresbeitrags.", // client: Beitragsregel *
    mustAgree: "Sie müssen zustimmen, um fortzufahren",
    yes: "Ja",
    no: "Nein",
    choose: "Wählen...",
    participateCompetition: "Wettkampfteilnahme", // client: Möchten Sie, dass Ihr Kind an Wettkämpfen teilnimmt?
    groups: "Studiengruppe", // (kept for your use)
    age: "Alter", // (kept for your use)
    group1: "4-6 Jahre",
    group2: "7-14 Jahre",
    group3: "14+ & 18+ Jahre",

    date: "Datum", // (extra/kept)
    time: "Uhrzeit", // (extra/kept)
    quantity: "Anzahl der Zimmer", // (extra/kept)
    message: "Nachricht (optional)", // client: Nachricht (für zusätzliche Informationen)
    button: "Senden",
    send: "Anfrage senden",
    thankYou: "Danke für Ihre Nachricht!",
    comfirmation: "Ich melde mich so schnell wie möglich bei Ihnen.",
  },
  it: {
    surname: "Cognome", // client: Cognome *
    name: "Nome", // client: Nome *
    email: "Email", // client: Email *
    phone: "Numero di telefono", // client: Numero di telefono *
    address: "Indirizzo", // client: Indirizzo *
    nationality: "Nazionalità", // client: Nazionalità *
    avsNumber: "Numero AVS", // client: Numero AVS *
    birthDate: "Data di nascita - GG/MM/AAAA", // client: Data di nascita *. GIORNO MESE ANNO
    termsConditions1:
      "Autorizzo il Club di Judo a scattare foto durante eventi e allenamenti e ad utilizzarle esclusivamente per i materiali legati al club (sito web, brochure, giornali, pubblicazioni, ecc.)", // client: consenso foto *
    termsConditions2:
      "Iscrivendo il/la proprio/a figlio/a al Judo Club Geo di Ginevra, vi impegnate a pagare l’intera quota annuale a partire dal giorno dell’iscrizione. Il pagamento rateale non esonera in alcun modo dal saldo della quota annuale.", // client: regola quota *
    mustAgree: "Devi accettare per continuare",
    yes: "Sì",
    no: "No",
    choose: "Scegli...",
    participateCompetition: "Partecipazione alle competizioni", // client: Vuoi che tuo figlio partecipi alle competizioni?
    groups: "Gruppo di studio", // (kept for your use)
    age: "Età", // (kept for your use)
    group1: "4-6 anni",
    group2: "7-14 anni",
    group3: "14+ & 18+ anni",

    date: "Data", // (extra/kept)
    time: "Orario", // (extra/kept)
    quantity: "Numero di stanze", // (extra/kept)
    message: "Messaggio (opzionale)", // client: Messaggio (per informazioni aggiuntive)
    button: "Invia",
    send: "Invia richiesta",
    thankYou: "Grazie per il tuo messaggio!",
    comfirmation: "Ti risponderò il prima possibile.",
  },
  ge: {
    surname: "გვარი", // client: გვარი *
    name: "სახელი", // client: სახელი *
    email: "ელ. ფოსტა", // client: ელ. ფოსტა *
    phone: "ტელეფონის ნომერი", // client: ტელეფონის ნომერი *
    address: "მისამართი", // client: მისამართი *
    nationality: "ეროვნება", // client: ეროვნება *
    avsNumber: "AVS ნომერი", // client: AVS ნომერი *
    birthDate: "დაბადების თარიღი - დღე/თვე/წელი", // client: დაბადების თარიღი *. დღე თვე წელი
    termsConditions1:
      "ვაძლევ ნებართვას ძიუდოს კლუბს გადაიღოს ფოტოები ღონისძიებებისა და ვარჯიშების დროს და გამოიყენოს ისინი მხოლოდ კლუბის მასალებისთვის (ვებსაიტი, ბუკლეტი, გაზეთები, პუბლიკაციები და სხვ.)", // client: ფოტოების ნებართვა *
    termsConditions2:
      "თუ თქვენ რეგისტრირებთ თქვენს შვილს ჟენევის ძიუდოს კლუბში, ვალდებული ხართ გადაიხადოთ წლიური საწევრო სრულად რეგისტრაციის დღიდან. გადახდის გადანაწილება არ ათავისუფლებს წლიური საწევროს სრულად გადახდისგან.", // client: საწევროს წესი *
    mustAgree: "გთხოვთ დათანხმდეთ გასაგრძელებლად",
    yes: "დიახ",
    no: "არა",
    choose: "აირჩიეთ...",
    participateCompetition: "შეჯიბრებაში მონაწილეობა", // client: გსურთ თუ არა თქვენს შვილს მიიღოს მონაწილეობა შეჯიბრებებში?
    groups: "სასწავლო ჯგუფი", // (kept for your use)
    age: "ასაკი", // (kept for your use)
    group1: "4-6 წელი",
    group2: "7-14 წელი",
    group3: "14+ & 18+ წელი",

    date: "თარიღი", // (extra/kept)
    time: "დრო", // (extra/kept)
    quantity: "ოთახების რაოდენობა", // (extra/kept)
    message: "შეტყობინება (სურვილისამებრ)", // client: შეტყობინება (დამატებითი ინფორმაციისთვის)
    button: "გაგზავნა",
    send: "მოთხოვნის გაგზავნა",
    thankYou: "გმადლობთ შეტყობინებისთვის!",
    comfirmation: "გიპასუხებთ რაც შეიძლება მალე.",
  },
};

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
  const unMemberCountries = [
    "Switzerland",
    "France",
    "",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia (Republic of The)",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia (Federated States of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (Kingdom of the)",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Lucia",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Trinidad and Tobago",
    "Tunisia",
    "Türkiye",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom of Great Britain and Northern Ireland",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela, Bolivarian Republic of",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [nationalityValue, setNationalityValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [birthDate, setBirthDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");

  const [surnameError, setSurnameError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [agreedTerms1, setAgreedTerms1] = useState(false);
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
        {/* Pratique de la compétition 2 choise */}
        {/* specific course 3 chise*/}

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
              value={birthDate}
              onChange={(e) => setBirthDateValue(e.target.value)}
            />
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
              <option value="4-6">
                {t.group1} {t.age}
              </option>
              <option value="7-14">
                {t.group2} {t.age}
              </option>
              <option value="14+ & 18+">
                {t.group3} {t.age}
              </option>
            </select>
            {groupError && (
              <div
                className={styles.inputRed}
                style={{ marginTop: 4, fontSize: 13 }}
              >
                {t.choose}
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
