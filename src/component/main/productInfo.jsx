import PathImage from "../../constant/imagePath";
import CustomTitle from "../custom/CustomTitle";
import ProductDetails from "../custom/productDetail";
import CustomButton from "../custom/CustomButton";
function ProductInfo() {
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
            className="mx-auto mt-5"
          />
        </div>
        <div className="flex product-menction justify-between">
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
          <CustomButton text="Jetzt registrieren & Rabatte sichern" />
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
