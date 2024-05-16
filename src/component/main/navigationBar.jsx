import PathImage from "../../constant/imagePath";
import NavItems from "../custom/navItems";
const NavigationBar = () => {
  return (
    <nav>
      <div className="flex justify-center items-center">
        {/* 1 */}
        <div className="px-5 py-3 border-r border-solid border-l w-fit border-navbar border-b border-b-white border-b-collapse">
          <img src={PathImage.lashes} alt="miss lashes" />
        </div>
        {/* 2 */}
        <div className="px-5 py-3.5 border-r border-solid w-fit">
          <img src={PathImage.lumina} alt="miss lumina" />
        </div>
        {/* 3 */}
        <div className="px-5 py-3 border-r border-solid w-fit">
          <img src={PathImage.brows} alt="miss brows" />
        </div>
        {/* 4 */}
        <div className="px-5 py-3 border-r border-solid w-fit">
          <img src={PathImage.Skin} alt="bb skin" />
        </div>
      </div>
      <div className="py-5 border-t border-b border-solid flex flex-col justify-center items-center ">
        <div className="flex items-center gap-10">
          <a href="#">
            <img src={PathImage.mainLogo} alt="main site logo" />
          </a>
          <div className="relative">
            <input type="text" className="input-search" placeholder="Suche" />
            <div className="absolute top-3.5 left-3">
              <img
                src={PathImage.searchIcon}
                alt="search icon"
                className="w-4"
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="#">
              <img src={PathImage.userIcon} alt="User log in icon" />
            </a>
            <a href="#">
              <img src={PathImage.shoppingCart} alt="Shopping cart icon" />
            </a>
          </div>
        </div>
        <div>
          <ul className="mt-5 flex items-center">
            <NavItems
              ItemText="Sets"
              paddingL="0"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Lashes"
              paddingL="20px"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Pinzetten"
              paddingL="20px"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Kleber"
              paddingL="20px"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Lifting"
              paddingL="20px"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Waxing"
              paddingL="20px"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Farben"
              paddingL="20px"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Pflege & Zubehör"
              paddingL="20px"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Schulungen"
              paddingL="20px"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Einrichtung"
              paddingL="20px"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Outlet"
              paddingL="20px"
              paddingR="20px"
              borderPara="r"
            />
            <NavItems
              ItemText="Adventskalender"
              paddingL="20px"
              paddingR="0"
              borderPara="none"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
