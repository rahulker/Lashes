import PathImage from "../../constant/imagePath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FloatingSection = () => {
  return (
    <section className="floating-bg relative">
      <div className="floating-div-container">
        <div className=" floating-banner new-floating-section relative rounded-md lg:flex-row lg:text-left text-center flex flex-col justify-between">
          <img
            src={PathImage.bannerImage}
            alt="woman eye"
            className="rounded-t-md lg:rounded-l-md lg:rounded-tr-none object-cover"
          />
          <div className="flex w-full justify-evenly lg:items-center flex-col lg:flex-row floating-content-container">
            <div>
              <h3 className="custom-title">
                <span>Registriere Dich jetzt,</span>
                <br />
                um Rabatte zu erhalten!{" "}
              </h3>
              <p>
                Spare auf tägliche Arbeitsmaterialien, deiner Studioausstattung
                und vielem mehr!
              </p>
            </div>
            <div className="text-white w-fit mx-auto lg:mx-0">
              <button className="Custom-btn floating-banner-btn flex items-center gap-2.5">
                Jetzt registrieren
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingSection;
