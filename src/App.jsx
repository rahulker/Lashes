import "./assets/css/style.css";
import "./assets/css/style-scss.css";
import Header from "./component/main/Header";
import ProductInfo from "./component/main/productInfo";
import ImprovementLevel from "./component/main/improvementLevel";
import ProductList from "./component/main/ProductList";
import ClintReview from "./component/main/clintReview";
import CeoContent from "./component/main/CeoContent";
import Faq from "./component/main/FAQ";
// import FloatingSection from "./component/main/FloatingSection";
import SampleMakeUp from "./component/main/SampleMakeUp";
import Footer from "./component/main/Footer";
function App() {
  return (
    <div className="container-div">
      <Header />
      <ProductInfo />
      <ImprovementLevel />
      <ProductList />
      <ClintReview />
      <CeoContent />
      <Faq />
      {/* <FloatingSection /> */}
      <SampleMakeUp />
      <Footer />
    </div>
  );
}

export default App;
