import "./assets/css/style.css";
import "./assets/css/style-scss.css";
import Header from "./component/main/Header";
import ProductInfo from "./component/main/productInfo";
import ImprovementLevel from "./component/main/improvementLevel";
import ProductList from "./component/main/ProductList";
import ClintReview from "./component/main/clintReview";
function App() {
  return (
    <div className="container-div">
      <Header />
      <ProductInfo />
      <ImprovementLevel />
      <ProductList />
      <ClintReview />
    </div>
  );
}

export default App;
