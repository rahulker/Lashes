import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const AccodinationSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div>
      <div
        className="acodination-actual border mt-5 flex justify-between items-center"
        onClick={toggleSection}
      >
        <h3> {section.title} </h3>
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
            <p className="fristInfo">{section.title2}</p>
            <FontAwesomeIcon icon={faMinus} style={{ color: "ea5297" }} />
          </div>
          <div className="mt-2.5 accodination-para">
            <p className="">{section.para}</p>
            <ul>
              <li className="list-disc list-inside">{section.listOneA}</li>
              <li className="list-disc list-inside">{section.listTwoA}</li>
              <li className="list-disc list-inside">{section.listThreeA}</li>
              <li className="list-disc list-inside">{section.listFourA}</li>
              <li className="list-disc list-inside">{section.listFiveA}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
const Accodination = ({ section }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      {section.map((section, index) => (
        <AccodinationSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};
Accodination.propTypes = {
  section: PropTypes.any,
};
AccodinationSection.propTypes = {
  section: PropTypes.any,
  isActiveSection: PropTypes.bool,
  setActiveIndex: PropTypes.any,
  sectionIndex: PropTypes.any,
};
export default Accodination;
