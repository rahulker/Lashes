import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import PathImage from "../../constant/imagePath";
import CustomTitle from "../custom/CustomTitle";
import SwiperSlideItem from "../custom/swiperSlideItem";
SwiperCore.use([Autoplay, Pagination, Navigation]);
const ClintReview = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <section className="pink-background">
      <div className="marging clint-review text-center">
        <CustomTitle darkText="Zufriedene" pinkText="Kundinnen" />
        <p className="level-para">
          Miss Lashes bietet dir alles aus einer Hand, was deine Kundinnen noch
          glücklicher macht. Egal ob Lashes, Sets, Kleber oder auch
          Adventskalender. Überzeugt? Registriere dich jetzt um exklusive
          Rabatte zu erhalten.
        </p>
        <img
          src={PathImage.miniLogo}
          alt="mini site logo"
          className="mx-auto mt-5"
        />

        <div className="swiper-container">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
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
              <SwiperSlideItem
                clintDate="14.12.2023"
                clintName="Anna"
                clintSaying="Tolle und sehr hochwertige Produkte, der Kundenservice ist 1a! Ich liebe es Miss Lashes Kundin zu sein :)"
                clintImage={PathImage.clintFrist}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlideItem
                clintDate="10.12.2023"
                clintName="Elison"
                clintSaying="Vielen Dank an das Team von MISS LASHES für die hervorragende Arbeit! Ihre Produkte haben mir das Vertrauen gegeben, bei Ihnen immer wieder zu bestellen."
                clintImage={PathImage.clintSecond}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlideItem
                clintDate="6.12.2023"
                clintName="Viktoriia"
                clintSaying="Einfach nur unglaublich! Die Branche der Wimpernverlängerung ist in letzter Zeit explodiert, was vor allem ich als jahrelange Wimpernstylistin mitbekommen habe. Aber was unglaublich daran ist, ist dass Miss Lashes trotz der vielen guten Konkurrenten, es immer schafft auf der Nummer 1 zu bleiben. Egal ob im Thema „Neuheiten“, „UV-System“, „Onlineschulungen“ oder „Best-seller“. Sie behalten ihre Qualität bei und das ist einfach unglaublich. Es ist wirklich schwer eine Firma zu finden, die sich stets um ihre Kund:innen kümmert. Applaus an Miss Lashes!"
                clintImage={PathImage.ClintThrid}
              />
            </SwiperSlide>
            {/*  2*/}
            <SwiperSlide>
              <SwiperSlideItem
                clintDate="14.12.2023"
                clintName="Anna"
                clintSaying="Tolle und sehr hochwertige Produkte, der Kundenservice ist 1a! Ich liebe es Miss Lashes Kundin zu sein :)"
                clintImage={PathImage.clintFrist}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlideItem
                clintDate="10.12.2023"
                clintName="Elison"
                clintSaying="Vielen Dank an das Team von MISS LASHES für die hervorragende Arbeit! Ihre Produkte haben mir das Vertrauen gegeben, bei Ihnen immer wieder zu bestellen."
                clintImage={PathImage.clintSecond}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlideItem
                clintDate="6.12.2023"
                clintName="Viktoriia"
                clintSaying="Einfach nur unglaublich! Die Branche der Wimpernverlängerung ist in letzter Zeit explodiert, was vor allem ich als jahrelange Wimpernstylistin mitbekommen habe. Aber was unglaublich daran ist, ist dass Miss Lashes trotz der vielen guten Konkurrenten, es immer schafft auf der Nummer 1 zu bleiben. Egal ob im Thema „Neuheiten“, „UV-System“, „Onlineschulungen“ oder „Best-seller“. Sie behalten ihre Qualität bei und das ist einfach unglaublich. Es ist wirklich schwer eine Firma zu finden, die sich stets um ihre Kund:innen kümmert. Applaus an Miss Lashes!"
                clintImage={PathImage.ClintThrid}
              />
            </SwiperSlide>
            {/* 3 */}
            <SwiperSlide>
              <SwiperSlideItem
                clintDate="14.12.2023"
                clintName="Anna"
                clintSaying="Tolle und sehr hochwertige Produkte, der Kundenservice ist 1a! Ich liebe es Miss Lashes Kundin zu sein :)"
                clintImage={PathImage.clintFrist}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlideItem
                clintDate="10.12.2023"
                clintName="Elison"
                clintSaying="Vielen Dank an das Team von MISS LASHES für die hervorragende Arbeit! Ihre Produkte haben mir das Vertrauen gegeben, bei Ihnen immer wieder zu bestellen."
                clintImage={PathImage.clintSecond}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlideItem
                clintDate="6.12.2023"
                clintName="Viktoriia"
                clintSaying="Einfach nur unglaublich! Die Branche der Wimpernverlängerung ist in letzter Zeit explodiert, was vor allem ich als jahrelange Wimpernstylistin mitbekommen habe. Aber was unglaublich daran ist, ist dass Miss Lashes trotz der vielen guten Konkurrenten, es immer schafft auf der Nummer 1 zu bleiben. Egal ob im Thema „Neuheiten“, „UV-System“, „Onlineschulungen“ oder „Best-seller“. Sie behalten ihre Qualität bei und das ist einfach unglaublich. Es ist wirklich schwer eine Firma zu finden, die sich stets um ihre Kund:innen kümmert. Applaus an Miss Lashes!"
                clintImage={PathImage.ClintThrid}
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
        </div>
      </div>
    </section>
  );
};

export default ClintReview;
