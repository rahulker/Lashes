import CustomTitle from "../custom/CustomTitle";
import PathImage from "../../constant/imagePath";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LevelCards from "../custom/LevelCards";
import CustomButton from "../custom/CustomButton";
const ImprovementLevel = () => {
  return (
    <>
      <section className="product-background relative">
        <div className=" bg-white level-product text-center  marging rounded-lg">
          <CustomTitle
            darkText="Unser einzigartiges"
            pinkText="Miss Lashes Vorteilsprogramm"
          />
          <p className="level-para">
            Unser Vorteilsprogramm ordnet dich je nach Einkaufswert pro Jahr in
            ein Level von 1 - 5 ein: Je höher dein Level, desto mehr Vorteile
            erhältst du.
            <span className="font-bold">
              {" "}
              Genieße Rabatte, gratis Zugang zu Online-Schulungen{" "}
            </span>{" "}
            und vieles mehr.
          </p>
          <img
            src={PathImage.miniLogo}
            alt="mini logo of the site"
            className="mx-auto mt-5"
          />
          {/* cards */}
          <div className="leves-cards ">
            <div className="hidden xl:grid gap-5 grid-cols-5">
              <LevelCards
                levelNum="Level 1"
                imgContent={PathImage.levelOne}
                percentage="5% Rabatt"
                ListOne="Ab 500 € Einkaufswert /Jahr"
                hiddenOrShow2="none"
                hiddenOrShow="none"
              />
              <LevelCards
                levelNum="Level 2"
                imgContent={PathImage.levelTwo}
                percentage="10% Rabatt"
                ListOne="Ab 1.000 € Einkaufswert /Jahr"
                hiddenOrShow2="none"
                hiddenOrShow="none"
              />
              <LevelCards
                levelNum="Level 3"
                imgContent={PathImage.levelThree}
                percentage="15% Rabatt"
                ListOne="Ab 4.000 € Einkaufswert /Jahr"
                listTwo="Jährlich eine Online Schulung"
                hiddenOrShow="list-item"
                hiddenOrShow2="none"
              />
              <LevelCards
                levelNum="Level 4"
                imgContent={PathImage.levelFour}
                percentage="20% Rabatt"
                ListOne="Ab 12.000 € Einkaufswert /Jahr"
                listTwo="5% RaaLieferung frei Hausbatt"
                listThree="Jährlich eine Online Schulung"
                hiddenOrShow="list-item"
                hiddenOrShow2="list-item"
              />
              <LevelCards
                levelNum="Level 5"
                imgContent={PathImage.levelFive}
                percentage="25% Rabatt"
                ListOne="Ab 20.000 € Einkaufswert /Jahr"
                listTwo="Lieferung frei Haus"
                listThree="Jährlich eine Online Schulung"
                hiddenOrShow="list-item"
                hiddenOrShow2="list-item"
              />
            </div>
            <div className=" xl:hidden xl:gap-5 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-between">
              <LevelCards
                levelNum="Level 1"
                imgContent={PathImage.mobileLevelOne}
                percentage="5% Rabatt"
                ListOne="Ab 500 € Einkaufswert /Jahr"
                hiddenOrShow2="none"
                hiddenOrShow="none"
              />
              <LevelCards
                levelNum="Level 2"
                imgContent={PathImage.mobileLevelTwo}
                percentage="10% Rabatt"
                ListOne="Ab 1.000 € Einkaufswert /Jahr"
                hiddenOrShow2="none"
                hiddenOrShow="none"
              />
              <LevelCards
                levelNum="Level 3"
                imgContent={PathImage.mobileLevelThree}
                percentage="15% Rabatt"
                ListOne="Ab 4.000 € Einkaufswert /Jahr"
                listTwo="Jährlich eine Online Schulung"
                hiddenOrShow="list-item"
                hiddenOrShow2="none"
              />
              <LevelCards
                levelNum="Level 4"
                imgContent={PathImage.mobileLevelFour}
                percentage="20% Rabatt"
                ListOne="Ab 12.000 € Einkaufswert /Jahr"
                listTwo="5% RaaLieferung frei Hausbatt"
                listThree="Jährlich eine Online Schulung"
                hiddenOrShow="list-item"
                hiddenOrShow2="list-item"
              />
              <LevelCards
                levelNum="Level 5"
                imgContent={PathImage.mobileLevelFive}
                percentage="25% Rabatt"
                ListOne="Ab 20.000 € Einkaufswert /Jahr"
                listTwo="Lieferung frei Haus"
                listThree="Jährlich eine Online Schulung"
                hiddenOrShow="list-item"
                hiddenOrShow2="list-item"
              />
            </div>
          </div>
          {/* floating  section */}
          <div className="absolute floating-banner lg:flex-row lg:text-left text-center w-fit flex flex-col">
            <img src={PathImage.bannerImage} />
            <div className="flex items-center flex-col gap-5 lg:flex-row lg:gap-10 floating-content-container">
              <div>
                <h3 className="custom-title">
                  <span>Registriere Dich jetzt,</span>
                  <br />
                  um Rabatte zu erhalten!{" "}
                </h3>
                <p>
                  Spare auf tägliche Arbeitsmaterialien, deiner
                  Studioausstattung und vielem mehr!
                </p>
              </div>
              <CustomButton text="Jetzt registrieren" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImprovementLevel;
