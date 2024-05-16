import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const CustomButton = ({ text }) => {
  return (
    <>
      <button className="text-white Custom-btn flex items-center gap-2.5">
        {text}
        <FontAwesomeIcon icon={faArrowRight} style={{ color: "#fff" }} />
      </button>
    </>
  );
};
CustomButton.propTypes = {
  text: PropTypes.string,
};

export default CustomButton;
