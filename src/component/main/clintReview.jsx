// import React from "react";
import { Swiper } from "swiper/react";
import PathImage from "../../constant/imagePath";
import CustomTitle from "../custom/CustomTitle";
import SwiperSlideItem from "../custom/swiperSlideItem";
function ClintReview() {
  //   const navigationPrevRef = React.useRef(null);
  //   const navigationNextRef = React.useRef(null);
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
        <SwiperSlideItem
          clintDate="14.12.2023"
          clintName="Anna"
          clintSaying="Tolle und sehr hochwertige Produkte, der Kundenservice ist 1a! Ich liebe es Miss Lashes Kundin zu sein :)"
          clintImage={PathImage.clintFrist}
        />
        <div className="swiper-container">
          <Swiper spaceBetween={50} slidesPerView={3}></Swiper>
        </div>
      </div>
    </section>
  );
}

export default ClintReview;
