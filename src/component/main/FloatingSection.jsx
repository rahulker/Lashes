import PathImage from "../../constant/imagePath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FloatingSection = () => {
  return (
    <section className="floating-bg">
      <div className="floating-div-container relative">
        <div className="mt-10 flex items-center flex-col floating-banner new-floating-banner text-left gap-10 absolute">
          <img src={PathImage.bannerImage} />
          <div>
            <h3 className="custom-title">
              <span>Registriere Dich jetzt, </span>
              <br />
              um Rabatte zu erhalten!
            </h3>
            <p>
              Spare auf tägliche Arbeitsmaterialien, <br />
              deiner Studioausstattung und vielem mehr!
            </p>
          </div>
          <button className="text-white Custom-btn new-btn flex items-center gap-2.5">
            Jetzt registrieren
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FloatingSection;
