import PathImage from "../../constant/imagePath";
import CustomTitle from "../custom/CustomTitle";
import CustomButton from "../custom/CustomButton";
const CeoContent = () => {
  return (
    <section className="pink-background ceo-background">
      <div className="bg-white actual-container">
        <CustomTitle
          darkText="Jetzt als Studio registrieren"
          pinkText="& Rabatte erhalten!"
        />
        <p className="mt-5 text-center level-para">
          Bereit für glücklichere Kundinnen & einzigartigen Rabatten? Dann
          registriere dich jetzt auf Miss Lashes als Kosmetikstudio und nehmen
          an unserem Vorteilsprogramm teil.{" "}
        </p>
        <img
          src={PathImage.miniLogo}
          alt="mini logo"
          className="mt-5 mx-auto"
        />
        <div className="main-ceo grid grid-cols-2 items-center">
          <div className="content-box">
            <div className="flex gap-10 items-center">
              <img src={PathImage.miniCeo} />
              <div>
                <h3 className="ceo-name custom-title">
                  <span>Irina Yalcin</span>
                </h3>
                <p className="status">Irina Yalcin, CEO & Founder</p>
              </div>
            </div>
            <img
              src={PathImage.vrified}
              alt="quatation"
              className="w-full mt-10"
            />
            <p className="ceo-saying mt-10">
              „Ich liebe es, die Schönheit in allem zu sehen, zu erkennen und
              vor allem liebe ich es, Schönheit zu schaffen. Der Mensch ist von
              Natur aus dazu geschaffen, Harmonie, Ästhetik und Ordnung
              anzustreben und eine Umgebung zu kreieren in dem er sich wohl
              fühlt und mit sich zufrieden ist und genau das ist es, was sich in
              unserer Unternehmensgruppe widerspiegelt.
            </p>
            <div className="mt-10">
              <CustomButton text="Jetzt zum Vorteilsprogramm registrieren" />
            </div>
          </div>
          <img src={PathImage.mainCeo} alt="main ceo photo" />
        </div>
      </div>
    </section>
  );
};

export default CeoContent;
