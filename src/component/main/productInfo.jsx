import PathImage from "../../constant/imagePath";
import CustomTitle from "../custom/CustomTitle";
import ProductDetails from "../custom/productDetail";
import CustomButton from "../custom/CustomButton";
const ProductInfo = () => {
  return (
    <section className="product-background product-container">
      <div className="marging">
        <div className="heading-title">
          <h2 className="custom-title text-center">
            Deine Treue zahlt sich aus. <br />
            <span>
              Jetzt mit dem Vorteilsprogramm <br /> von Miss Lashes sparen!
            </span>
          </h2>
          <CustomTitle paraContent="Du hast ein eigenes Studio und machst Wimpernverlängerungen für Deine Kundinnen? Miss Lashes ist dein Online-Shop für hochwertige Produkte, die dir eine erstklassige Wimpernverlängerung ermöglichen. Qualität wird bei uns Groß geschrieben, damit deine Kundinnen umso glücklicher sind und und zu begeisterten Stammkundinnen werden." />
          <img
            src={PathImage.miniLogo}
            alt="mini site logo"
            className="mx-auto md:mt-5 mt-2.5 sm:mt-4"
          />
        </div>
        <div className="product-menction  w-fit md:w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-5 md:grid-cols-3 md:gap-x-2 sm:gap-y-8 lg:grid-cols-4 xl:grid-cols-5">
          <ProductDetails
            imgContent={PathImage.CrownIcon}
            FristPara="Hochwertige und"
            SecondPara="innovative Produkte"
          />
          <ProductDetails
            imgContent={PathImage.educateHat}
            FristPara="Umfassende"
            SecondPara="Online-Schulungen"
          />
          <ProductDetails
            imgContent={PathImage.HeartIcon}
            FristPara="Persönlicher"
            SecondPara=" Kundenservice"
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
        <div className="w-fit mx-auto button-custom">
          <div className="hidden md:block">
            <CustomButton text="Jetzt registrieren & Rabatte sichern" />
          </div>
          <div className="md:hidden block">
            <CustomButton text="Jetzt als Kosmetikstudio registrieren" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
