import NavigationBar from "./navigationBar";
import PathImage from "../../constant/imagePath";
const Header = () => {
  return (
    <header>
      <NavigationBar />
      <div className="image-trio flex justify-center relative marging ">
        <div className="relative actual-image-trio flex justify-center">
          <img
            src={PathImage.middleImage}
            alt="header middle image"
            className="hidden lg:block"
          />
          <img
            src={PathImage.mobileMiddleImage}
            alt="header middle image"
            className="lg:hidden block"
          />
          <img
            src={PathImage.headerLeftImage}
            alt="header left image"
            className="header-l-image absolute"
          />
          <img
            src={PathImage.headerRightImage}
            alt="header right image"
            className="header-r-image absolute"
          />
        </div>
        <div className="absolute bg-white container-users gap-3.5 md:-bottom-9 lg:-bottom-8 md:flex-row flex flex-col items-center rounded-md -bottom-16 sm:-bottom-14">
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
