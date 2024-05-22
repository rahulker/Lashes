import PropTypes from "prop-types";
const NavItems = ({ ItemText, paddingL, paddingR, borderPara, titleText }) => {
  return (
    <li
      className={`py-1.5 border-${borderPara} border-solid`}
      style={{ paddingLeft: paddingL, paddingRight: paddingR }}
    >
      <a href="#" title={titleText}>
        {ItemText}
      </a>
    </li>
  );
};
NavItems.propTypes = {
  ItemText: PropTypes.string.isRequired,
  paddingL: PropTypes.string.isRequired,
  paddingR: PropTypes.string.isRequired,
  borderPara: PropTypes.string.isRequired,
  titleText: PropTypes.string,
};
export default NavItems;
