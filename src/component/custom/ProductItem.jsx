import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
const ProductItem = ({ imageContent, productTitle }) => {
  return (
    <div className="border border-color h-auto">
      <img src={imageContent} />
      <div className="product-text flex justify-between items-center">
        <p className="font-bold">{productTitle}</p>
        <FontAwesomeIcon icon={faArrowRightLong} style={{ color: "#f3f3f3" }} />
      </div>
    </div>
  );
};
ProductItem.propTypes = {
  imageContent: PropTypes.any,
  productTitle: PropTypes.string,
};
export default ProductItem;
