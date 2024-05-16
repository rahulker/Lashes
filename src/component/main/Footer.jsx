import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faYoutube,
  faPinterest,
  faLinkedin,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 items-center h-full">
        <div className="pink-footer h-full">
          <h4>Newsletter</h4>
          <p className="mt-2.5">
            Melde dich bei unserem kostenlosen Newsletter an, erhalte einen 10%
            Gutscheincode und profitiere von exklusiven Rabatten und
            interessanten Neuigkeiten!
          </p>
          <div className="mt-10 grid grid-cols-2 gap-2.5">
            <input
              name="email"
              id="email"
              className="bg-white py-2.5 px-5"
              placeholder="Deine E-Mail Adresse"
            />
            <button className="text-white Custom-btn footer-btn ">
              Anmelden
            </button>
          </div>
          <p className="mt-5">
            Die <span className="underline">Datenschutzbestimmungen </span>habe
            ich zur Kenntnis genommen
          </p>
          <div className="social-icon flex items-center">
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
        <div className="white-footer h-full"></div>
      </div>
    </footer>
  );
};
export default Footer;
