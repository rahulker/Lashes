import PathImage from "../../constant/imagePath";
import ProductDetails from "../custom/productDetail";
import CustomButton from "../custom/CustomButton";
const SampleMakeUp = () => {
  return (
    <section className="marging new-marging">
      <div className="makeup-container items-center">
        <div>
          <h2 className="custom-title">
            Deine Treue zahlt sich aus. <br />
            <span>Jetzt mit dem Vorteilsprogramm von Miss Lashes sparen!</span>
          </h2>
          <p className="mt-5">
            Miss Lashes ist Dein Online-Shop für hochwertige Produkte, die dir
            eine erstklassige Behandlungen ermöglichen. Qualität wird bei uns
            Groß geschrieben, damit deine Kundinnen umso glücklicher sind und
            und zu begeisterten Stammkundinnen werden.
          </p>
          <img
            src={PathImage.halfMiniLogo}
            alt="half mini logo"
            className="mt-5"
          />
          <div className="mt-10 grid grid-cols-2 gap-5">
            <ProductDetails
              imgContent={PathImage.CrownIcon}
              FristPara="Hochwertige und"
              SecondPara="innovative Produkte"
            />
            <ProductDetails
              imgContent={PathImage.educateHat}
              FristPara="Umfassende"
              SecondPara="Schulungen"
            />
            <ProductDetails
              imgContent={PathImage.HeartIcon}
              FristPara="Persönlicher"
              SecondPara="Kundenservice"
            />
            <ProductDetails
              imgContent={PathImage.ShopIcon}
              FristPara="Effiziente"
              SecondPara="Bestellabwicklung"
            />
            <ProductDetails
              imgContent={PathImage.DataIcon}
              FristPara="Attraktives"
              SecondPara="Vorteilsprogramm"
            />
          </div>
          <div className="mt-10">
            <CustomButton text="Jetzt registrieren & Rabatte sichern" />
          </div>
        </div>
        <div>
          <img src={PathImage.makeUpSample} />
        </div>
      </div>
    </section>
  );
};

export default SampleMakeUp;
