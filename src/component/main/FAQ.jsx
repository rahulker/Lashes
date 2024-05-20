import PathImage from "../../constant/imagePath";
import CustomTitle from "../custom/CustomTitle";
import Accodination from "../custom/Accodination";
import AccodinationData from "../../constant/Accodination";
const Faq = () => {
  return (
    <section className="xl:mt-28 mobile-accodination">
      <div className="marging text-center">
        <h2 className="custom-title">
          <span>Fragen & Antworten</span> zum Miss Lashes Vorteilsprogramm
        </h2>
        <CustomTitle paraContent="Gerne beantworten wir dir vorab einige Informationen zu unserem einzigartigem Miss Lashes Vorteilsprogramm." />
        <img
          src={PathImage.miniLogo}
          alt="mini site logo"
          className="mt-5 mx-auto"
        />
        <div className="accodination-container flex flex-col justify-center text-left">
          <Accodination
            section={AccodinationData}
            borderNew="border"
            colorTitle="ea5297"
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
