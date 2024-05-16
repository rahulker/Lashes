import PropTypes from "prop-types";
const ProductDetails = ({ imgContent, FristPara, SecondPara }) => {
  return (
    <div className="flex items-center gap-1.5">
      <img src={imgContent} />
      <div className="flex flex-col gap-1">
        <p>{FristPara}</p>
        <p>{SecondPara}</p>
      </div>
    </div>
  );
};
ProductDetails.propTypes = {
  imgContent: PropTypes.any.isRequired,
  FristPara: PropTypes.string.isRequired,
  SecondPara: PropTypes.string.isRequired,
};
export default ProductDetails;
