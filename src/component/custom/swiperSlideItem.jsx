import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import PathImage from "../../constant/imagePath";
import PropTypes from "prop-types";
const SwiperSlideItem = ({ clintImage, clintName, clintSaying, clintDate }) => {
  const [activeCard, isActiveCard] = useState(false);
  return (
    <div className="card-clint text-left w-fit">
      {/* clint name and star */}
      <div className="flex items-start gap-5">
        <img src={clintImage} alt="clint image" />
        <div>
          <p>{clintName}</p>
          <p className="clint-say-date">{clintDate}</p>
          <div className="flex items-center">
            <img src={PathImage.star} />
            <img src={PathImage.star} />
            <img src={PathImage.star} />
            <img src={PathImage.star} />
            <img src={PathImage.star} />
          </div>
        </div>
      </div>
      {/* say */}
      <div className="mt-5 w-fit">
        <p className={`${activeCard ? null : "clint-say"}`}>{clintSaying}</p>
        <button
          className="flex items-center mt-1.5 gap-1.5"
          onClick={() => {
            isActiveCard(!activeCard);
          }}
        >
          <p className="show-more">
            {activeCard ? "zeige weniger" : "Mehr anzeigen"}
          </p>
          <FontAwesomeIcon
            className={`${activeCard ? "arrow-reverse" : ""}`}
            icon={faAngleDown}
          />
        </button>
      </div>
      <img className="mt-5 w-full" alt="verified" src={PathImage.vrified} />
    </div>
  );
};
SwiperSlideItem.propTypes = {
  clintImage: PropTypes.string,
  clintName: PropTypes.string,
  clintSaying: PropTypes.string,
  clintDate: PropTypes.string,
};
export default SwiperSlideItem;
