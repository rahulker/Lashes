import PathImage from "../../constant/imagePath";
import ProductDetails from "../custom/productDetail";
import CustomButton from "../custom/CustomButton";
const SampleMakeUp = () => {
  return (
    <section className="marging new-marging">
      <div className="makeup-container items-center">
        <div className="content-box-makeup">
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
            className="mt-5 hidden lg:inline-block"
          />
          <img
            src={PathImage.miniLogo}
            alt="half mini logo"
            className="mt-5 lg:hidden mx-auto"
          />
          <div className="lg:mt-10 mt-5 grid sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-2.5 w-fit mx-auto sm:gap-x-20 sm:gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-8 md:mt-10 lg:grid-cols-2 lg:mx-0">
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
          <div className="lg:mt-10 mt-5 w-fit mx-auto hidden  lg:inline-block">
            <CustomButton text="Jetzt registrieren & Rabatte sichern" />
          </div>
          <div className="lg:mt-10  mt-5 w-fit mx-auto lg:hidden md:mt-8">
            <CustomButton text="Jetzt als Kosmetikstudio registrieren" />
          </div>
        </div>
        <div>
          <img
            src={PathImage.makeUpSample}
            alt="make up sample"
            className="w-3/4 sm:w-1/2 markup-image lg:w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SampleMakeUp;
