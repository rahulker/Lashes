import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const CustomButton = ({ text }) => {
  return (
    <>
      <button className="text-white Custom-btn">
        {text}
        <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} />
      </button>
    </>
  );
};
CustomButton.propTypes = {
  text: PropTypes.string,
};

export default CustomButton;
