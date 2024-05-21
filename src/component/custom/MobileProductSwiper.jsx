import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductItem from "./ProductItem";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import PathImage from "../../constant/imagePath";
SwiperCore.use([Autoplay, Pagination, Navigation]);
const MobileProductSwiper = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.48}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{ delay: 2000 }}
        loop
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.navigation.prevEl = navigationPrevRef.current;
        }}
      >
        {/* 1 */}
        <SwiperSlide>
          <ProductItem imageContent={PathImage.sets} productTitle="Sets" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem imageContent={PathImage.lashe} productTitle="Lashes" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            imageContent={PathImage.pinzetten}
            productTitle="Pinzetten"
          />
        </SwiperSlide>
        {/*  2*/}
        <SwiperSlide>
          <ProductItem imageContent={PathImage.kleber} productTitle="Kleber" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            imageContent={PathImage.lifting}
            productTitle="Lifting"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem imageContent={PathImage.waxing} productTitle="Waxing" />
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <ProductItem imageContent={PathImage.farben} productTitle="Farben" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            imageContent={PathImage.pflege}
            productTitle="Pflege & Zubehör"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            imageContent={PathImage.Schulungen}
            productTitle="Schulungen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            imageContent={PathImage.Einrichtung}
            productTitle="Einrichtung"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem imageContent={PathImage.outlet} productTitle="Outlet" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            imageContent={PathImage.studio}
            productTitle="Studioausstattung"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-control flex items-center  justify-center gap-5">
        <button ref={navigationPrevRef}>
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            style={{ color: "#1c1c1c" }}
          />
        </button>
        <button ref={navigationNextRef}>
          <FontAwesomeIcon className="nexIcon" icon={faArrowRightLong} />
        </button>
      </div>
    </>
  );
};

export default MobileProductSwiper;
