import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { SwiperSlide } from "swiper/react";
import PathImage from "../../constant/imagePath";
import PropTypes from "prop-types";
function SwiperSlideItem({ clintImage, clintName, clintSaying, clintDate }) {
  return (
    <SwiperSlide>
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
        <div className="mt-5">
          <p className="clint-say">{clintSaying}</p>
          <div className="flex items-center mt-1.5 gap-1.5">
            <p className="show-more">Mehr anzeigen</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
        <img className="mt-5" alt="verified" src={PathImage.vrified} />
      </div>
    </SwiperSlide>
  );
}
SwiperSlideItem.propTypes = {
  clintImage: PropTypes.string,
  clintName: PropTypes.string,
  clintSaying: PropTypes.string,
  clintDate: PropTypes.string,
};
export default SwiperSlideItem;
