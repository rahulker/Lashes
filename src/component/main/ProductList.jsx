import CustomTitle from "../custom/CustomTitle";
import PathImage from "../../constant/imagePath";
import ProductItem from "../custom/ProductItem";
import MobileProductSwiper from "../custom/MobileProductSwiper";
const ProductList = () => {
  return (
    <section className="marging product-list">
      <div className="text-center">
        <CustomTitle darkText="Einzigartige Miss" pinkText="Lashes Produkte" />
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
        <div className="product-list xl:grid grid-cols-4 hidden gap-5">
          <ProductItem imageContent={PathImage.sets} productTitle="Sets" />
          <ProductItem imageContent={PathImage.lashe} productTitle="Lashes" />
          <ProductItem
            imageContent={PathImage.pinzetten}
            productTitle="Pinzetten"
          />
          <ProductItem imageContent={PathImage.kleber} productTitle="Kleber" />
          <ProductItem
            imageContent={PathImage.lifting}
            productTitle="Lifting"
          />
          <ProductItem imageContent={PathImage.waxing} productTitle="Waxing" />
          <ProductItem imageContent={PathImage.farben} productTitle="Farben" />
          <ProductItem
            imageContent={PathImage.pflege}
            productTitle="Pflege & Zubehör"
          />
          <ProductItem
            imageContent={PathImage.Schulungen}
            productTitle="Schulungen"
          />
          <ProductItem
            imageContent={PathImage.Einrichtung}
            productTitle="Einrichtung"
          />
          <ProductItem imageContent={PathImage.outlet} productTitle="Outlet" />
          <ProductItem
            imageContent={PathImage.studio}
            productTitle="Studioausstattung"
          />
        </div>
        <div className="mt-10 xl:hidden">
          <MobileProductSwiper />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
