import "./assets/css/style.css";
import "./assets/css/style-scss.css";
import CustomButton from "./component/custom/CustomButton";
import CustomTitle from "./component/custom/CustomTitle";

function App() {
  return (
    <div className="container-div">
      <CustomButton text="click to increment" />
      <CustomTitle
        darkText={"hello"}
        pinkText={"world"}
        paraContent={"this is my frist react app"}
      />
      <img src=""></img>
    </div>
  );
}

export default App;
