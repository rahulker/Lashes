import PropTypes from "prop-types";
const CustomTitle = ({ darkText, pinkText, paraContent }) => {
  return (
    <div className="custom-title-div">
      <h2 className="custom-title">
        {darkText} <span>{pinkText}</span>
      </h2>
      <p>{paraContent}</p>
    </div>
  );
};
CustomTitle.propTypes = {
  darkText: PropTypes.string,
  pinkText: PropTypes.string,
  paraContent: PropTypes.string,
};

export default CustomTitle;
