import footerInfo from "../../constant/footerAccodination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import {
  faSquareFacebook,
  faYoutube,
  faPinterest,
  faLinkedin,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import PathImage from "../../constant/imagePath";
import Accodination from "../custom/Accodination";
const Footer = () => {
  return (
    <footer>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center h-full">
        <div className="pink-footer h-full text-center lg:text-left">
          <h4>Newsletter</h4>
          <p className="mt-2.5">
            Melde dich bei unserem kostenlosen Newsletter an, erhalte einen 10%
            Gutscheincode und profitiere von exklusiven Rabatten und
            interessanten Neuigkeiten!
          </p>
          <div className="mt-10 flex lg:grid grid-cols-2 items-center justify-center gap-2.5 flex-wrap">
            <input
              name="email"
              id="email"
              className="bg-white py-2.5 px-5 rounded-md "
              placeholder="Deine E-Mail Adresse"
            />
            <button className="text-white Custom-btn footer-btn w-fit">
              Anmelden
            </button>
          </div>
          <p className="mt-5">
            Die <span className="underline">Datenschutzbestimmungen </span>habe
            ich zur Kenntnis genommen
          </p>
          <div className="social-icon flex justify-center lg:justify-start items-center flex-wrap">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                style={{ color: "#ea5297" }}
              />
            </a>
            <a href="https://www.tiktok.com/">
              <FontAwesomeIcon icon={faTiktok} style={{ color: "#ea5297" }} />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ea5297" }}
              />
            </a>
            <a href="https://www.youtube.com/">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#ea5297" }} />
            </a>
            <a href="https://www.linkedin.com/">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ea5297" }} />
            </a>
            <a href="https://www.pinterest.com/">
              <FontAwesomeIcon
                icon={faPinterest}
                style={{ color: "#ea5297" }}
              />
            </a>
          </div>
        </div>
        <div className="white-footer h-full hidden lg:block">
          <div className="grid grid-cols-2 justify-between gap-y-10">
            {/* 1 */}
            <div>
              <div>
                <h4>Unternehmen</h4>
                <ul className="mt-2.5 flex flex-col gap-2.5">
                  <li>
                    <a href="#">Kontakt</a>
                  </li>
                  <li>
                    <a href="#">Über Uns</a>
                  </li>
                  <li>
                    <a href="#">Bestseller</a>
                  </li>
                </ul>
              </div>
              <select className="selection-bg pr-1.5">
                <option value="DE">DE</option>
              </select>
            </div>
            {/* 2 */}
            <div>
              <h4>Informationen</h4>
              <ul className="flex gap-1.5 flex-col mt-1.5">
                <li>
                  <a href="#">Impressum</a>
                </li>
                <li>
                  <a href="#">AGB</a>
                </li>
                <li>
                  <a href="#">Datenschutz</a>
                </li>
                <li>
                  <a href="#">Versand & Zahlungsbedingungen</a>
                </li>
                <li>
                  <a href="#">Stornierung & Widerruf</a>
                </li>
                <li>
                  <a href="#">Cookie-Einstellungen</a>
                </li>
              </ul>
            </div>
            {/* 3 */}
            <div>
              <h4>Bezahlen</h4>
              <div className="grid payment-method gap-1.5 mt-1.5">
                <img src={PathImage.payPile} alt="paypile" className="w-full" />
                <img src={PathImage.card} alt="card" className="w-full" />
                <img src={PathImage.visa} alt="visa" className="w-full" />
                <img src={PathImage.sepa} alt="sepa" className="w-full" />
                <img src={PathImage.giro} alt="giro" className="w-full" />
                <img src={PathImage.sofor} alt="sofort" className="w-full" />
              </div>
            </div>
            {/* 4 */}
            <div>
              <h4>Versenden</h4>
              <div className="flex items-center gap-1.5 mt-1.5 justify-between">
                <img src={PathImage.gls} alt="gls" />
                <div className="flex flex-col items-center gap-1.5">
                  <img src={PathImage.dhl} alt="dhl" />
                  <img src={PathImage.dhl} alt="dhl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white-footer lg:hidden">
          <Accodination
            section={footerInfo}
            colorTitle="1c1c1c"
            borderNew="border-b"
          />
        </div>
      </div>
      <div className="marging copyright py-5">
        <div className="flex items-center text-left justify-between">
          <p>
            © Copyright 2022 Etabliertes Beauty- & Lifestyleunternehmen auf
            Lashextensions spezialisiert.
          </p>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="transition-all up-arrow rounded-md"
          >
            <FontAwesomeIcon icon={faArrowUp} style={{ color: "#fff" }} />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
