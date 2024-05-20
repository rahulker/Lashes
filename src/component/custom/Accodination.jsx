import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const AccodinationSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
  BorderThere,
  colorTitle,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  const hasData = (section) => {
    section.title ||
      section.title2 ||
      section.listOneA ||
      section.listTwoA ||
      section.listThreeA ||
      section.listFourA ||
      section.listFiveA ||
      section.ImageOne ||
      section.ImageTwo ||
      section.ImageThree ||
      section.ImageFour ||
      section.ImageFive ||
      section.ImageSix ||
      section.NestImageTwo;
    section.NestImageOne;
  };

  hasData(!section);
  return (
    <div>
      <div
        className={`acodination-actual ${BorderThere} lg:mt-5 flex justify-between items-start`}
        onClick={toggleSection}
      >
        {section.title && <h3> {section.title} </h3>}
        <FontAwesomeIcon
          icon={faPlus}
          className={`${isActiveSection ? "cross-arrow" : ""}`}
        />
      </div>
      {isActiveSection && (
        <div className="accodination-dropdown border mt-5 ">
          <div
            className="flex items-center justify-between"
            onClick={toggleSection}
          >
            {section.title2 && (
              <h3 style={{ color: "#" + colorTitle }}> {section.title2} </h3>
            )}
            <FontAwesomeIcon icon={faMinus} style={{ color: "ea5297" }} />
          </div>
          <div className="mt-2.5 accodination-para">
            {section.para && <p> {section.para} </p>}
            <ul className="mt-1">
              {section.listOneA && (
                <li className="list-disc list-inside">{section.listOneA}</li>
              )}
              {section.listTwoA && (
                <li className="list-disc list-inside">{section.listTwoA}</li>
              )}
              {section.listThreeA && (
                <li className="list-disc list-inside">{section.listThreeA}</li>
              )}
              {section.listFourA && (
                <li className="list-disc list-inside">{section.listFourA}</li>
              )}
              {section.listFiveA && (
                <li className="list-disc list-inside">{section.listFiveA}</li>
              )}
            </ul>
            <div className="grid grid-cols-3 gap-5">
              {section.ImageOne && (
                <img
                  src={section.ImageOne}
                  alt="footer image"
                  className="w-auto"
                />
              )}
              {section.ImageTwo && (
                <img
                  src={section.ImageTwo}
                  alt="footer image"
                  className="w-auto"
                />
              )}
              {section.ImageThree && (
                <img
                  src={section.ImageThree}
                  alt="footer image"
                  className="w-auto"
                />
              )}
              {section.ImageFour && (
                <img
                  src={section.ImageFour}
                  alt="footer image"
                  className="w-auto"
                />
              )}
              {section.ImageFive && (
                <img
                  src={section.ImageFive}
                  alt="footer image"
                  className="w-auto"
                />
              )}
              {section.ImageSix && (
                <img
                  src={section.ImageSix}
                  alt="footer image"
                  className="w-auto"
                />
              )}

              <div className="flex items-start gap-5">
                {section.NestImageOne && (
                  <img
                    src={section.NestImageOne}
                    alt="footer image"
                    className="w-auto"
                  />
                )}
                <div>
                  {section.NestImageTwo && (
                    <img
                      src={section.NestImageTwo}
                      alt="footer image"
                      className="w-auto"
                    />
                  )}
                  {section.NestImageTwo && (
                    <img
                      src={section.NestImageTwo}
                      alt="footer image"
                      className="w-auto"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const Accodination = ({ section, borderNew, colorTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-5 lg:block">
      {section.map((section, index) => (
        <AccodinationSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
          BorderThere={borderNew}
          colorTitle={colorTitle}
        />
      ))}
    </div>
  );
};
Accodination.propTypes = {
  section: PropTypes.any,
  borderNew: PropTypes.string,
  colorTitle: PropTypes.any,
};
AccodinationSection.propTypes = {
  section: PropTypes.any,
  isActiveSection: PropTypes.bool,
  setActiveIndex: PropTypes.any,
  sectionIndex: PropTypes.any,
  BorderThere: PropTypes.any,
  colorTitle: PropTypes.any,
};
export default Accodination;
