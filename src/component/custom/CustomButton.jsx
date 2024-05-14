import PropTypes from "prop-types";
const CustomButton = ({ text }) => {
  return (
    <>
      <button className="text-white Custom-btn">{text}</button>
    </>
  );
};
CustomButton.propTypes = {
  text: PropTypes.string,
};

export default CustomButton;
