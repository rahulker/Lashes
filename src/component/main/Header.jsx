import ConditionNav from "./conditionNav";
import PathImage from "../../constant/imagePath";
const Header = () => {
  return (
    <header>
      <ConditionNav />
      <div className="image-trio flex justify-center relative marging">
        <img
          src={PathImage.headerLeftImage}
          alt="header left image"
          className="header-l-image absolute"
        />
        <img src={PathImage.middleImage} alt="header middle image" />
        <img
          src={PathImage.headerRightImage}
          alt="header right image"
          className="header-r-image absolute"
        />
        <div className="absolute bg-white container-users -bottom-8 flex items-center ">
          <div className="flex items-center w-fit">
            <img src={PathImage.user1} alt="user1" className="user" />
            <img src={PathImage.user2} alt="user2" className="user" />
            <img src={PathImage.user3} alt="user3" className="user" />
            <img src={PathImage.user4} alt="user4" className="user" />
            <img src={PathImage.lastUser} alt="last user" className="user" />
            <img src={PathImage.onek} alt="one k plus users" className="user" />
          </div>
          <h3 className="custom-title user-content">
            <span>Über 1.000</span>Kundeninnen
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
