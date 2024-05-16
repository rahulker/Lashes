import PropTypes from "prop-types";
const NavItems = ({ ItemText, paddingL, paddingR, borderPara }) => {
  return (
    <a href="#">
      <li
        className={`py-1.5 border-${borderPara} border-solid`}
        style={{ paddingLeft: paddingL, paddingRight: paddingR }}
      >
        {ItemText}
      </li>
    </a>
  );
};
NavItems.propTypes = {
  ItemText: PropTypes.string.isRequired,
  paddingL: PropTypes.string.isRequired,
  paddingR: PropTypes.string.isRequired,
  borderPara: PropTypes.string.isRequired,
};
export default NavItems;
