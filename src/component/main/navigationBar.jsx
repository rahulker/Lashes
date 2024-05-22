import { useState } from "react";
import PathImage from "../../constant/imagePath";
import NavItems from "../custom/navItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const NavigationBar = () => {
  const [active, setActive] = useState(false);
  const updateMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="hidden xl:block">
        <div className="flex justify-center items-center">
          {/* 1 */}
          <div className="px-5 py-3 border-r border-solid  border-l w-fit border-navbar border-b border-b-white border-b-collapse">
            <img src={PathImage.lashes} alt="miss lashes" title="miss lashes" />
          </div>
          {/* 2 */}
          <div className="px-5 py-3.5 border-r border-solid cursor-pointer w-fit">
            <img src={PathImage.lumina} alt="miss lumina" title="miss lumina" />
          </div>
          {/* 3 */}
          <div className="px-5 py-3 border-r border-solid cursor-pointer w-fit">
            <img src={PathImage.brows} alt="miss brows" title="miss brows" />
          </div>
          {/* 4 */}
          <div className="px-5 py-3 border-r border-solid cursor-pointer w-fit">
            <img src={PathImage.Skin} alt="bb skin" title="bb skin" />
          </div>
        </div>
        <div className="py-5 border-t border-b border-solid ">
          <div className="flex items-center gap-10 justify-center w-full">
            <a href="#">
              <img
                src={PathImage.mainLogo}
                alt="main site logo"
                title="miss lashes"
              />
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
                <img
                  src={PathImage.userIcon}
                  alt="User log in icon"
                  title="user profile"
                />
              </a>
              <a href="#">
                <img
                  src={PathImage.shoppingCart}
                  alt="Shopping cart icon"
                  title="shopping cart"
                />
              </a>
            </div>
          </div>
          <div className="">
            <ul className="mt-5 flex items-center justify-center w-full hover-effect ">
              <NavItems
                ItemText="Sets"
                paddingL="0"
                paddingR="20px"
                borderPara="r"
                titleText="Sets"
              />
              <NavItems
                ItemText="Lashes"
                paddingL="20px"
                paddingR="20px"
                borderPara="r"
                titleText="Lashes"
              />
              <NavItems
                ItemText="Pinzetten"
                paddingL="20px"
                paddingR="20px"
                borderPara="r"
                titleText="Pinzetten"
              />
              <NavItems
                ItemText="Kleber"
                paddingL="20px"
                paddingR="20px"
                borderPara="r"
                titleText="Kleber"
              />
              <NavItems
                ItemText="Lifting"
                paddingL="20px"
                paddingR="20px"
                borderPara="r"
                titleText="Lifting"
              />
              <NavItems
                ItemText="Waxing"
                paddingL="20px"
                paddingR="20px"
                borderPara="r"
                titleText="Waxing"
              />
              <NavItems
                ItemText="Farben"
                paddingL="20px"
                paddingR="20px"
                borderPara="r"
                titleText="Farben"
              />
              <NavItems
                ItemText="Pflege & Zubehör"
                paddingL="20px"
                paddingR="20px"
                borderPara="r"
                titleText="Pflege & Zubehör"
              />
              <NavItems
                ItemText="Schulungen"
                paddingL="20px"
                paddingR="20px"
                borderPara="r"
                titleText="Schulungen"
              />
              <NavItems
                ItemText="Einrichtung"
                paddingL="20px"
                paddingR="20px"
                borderPara="r"
                titleText="Einrichtung"
              />
              <NavItems
                ItemText="Outlet"
                paddingL="20px"
                paddingR="20px"
                borderPara="r"
                titleText="Outlet"
              />
              <NavItems
                ItemText="Adventskalender"
                paddingL="20px"
                paddingR="0"
                borderPara="none"
                titleText="Adventskalender"
              />
            </ul>
          </div>
        </div>
      </nav>
      <nav className="py-2.5 px-3.5 xl:hidden flex justify-between relative border-b border-color border-solid z-30">
        <div className="flex items-center gap-5">
          <button onClick={updateMenu}>
            <img
              src={PathImage.mobileMenu}
              alt="mobile menu"
              title="click to open menu"
            />
          </button>
          <div
            className={`absolute ${
              active ? "mobile-nav active" : "mobile-nav"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex items-center justify-center flex-col ">
              <NavItems
                ItemText="Sets"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Sets"
              />
              <NavItems
                ItemText="Lashes"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Lashes"
              />
              <NavItems
                ItemText="Pinzetten"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Pinzetten"
              />
              <NavItems
                ItemText="Kleber"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Kleber"
              />
              <NavItems
                ItemText="Lifting"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Lifting"
              />
              <NavItems
                ItemText="Waxing"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Waxing"
              />
              <NavItems
                ItemText="Farben"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Farben"
              />
              <NavItems
                ItemText="Pflege & Zubehör"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Pflege & Zubehör"
              />
              <NavItems
                ItemText="Schulungen"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Schulungen"
              />
              <NavItems
                ItemText="Einrichtung"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Einrichtung"
              />
              <NavItems
                ItemText="Outlet"
                paddingL="20px"
                paddingR="20px"
                borderPara="b"
                titleText="Outlet"
              />
              <NavItems
                ItemText="Adventskalender"
                paddingL="20px"
                paddingR="20px"
                borderPara="none"
                titleText="Adventskalender"
              />
            </ul>
          </div>
          <div className="flex items-center border-r">
            <img
              src={PathImage.lashes}
              alt="miss lashes"
              className="w-2/3 py-3.5 pr-2.5"
              title="miss lashes"
            />
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
        <div className="flex gap-5">
          <img
            src={PathImage.mobileSearch}
            alt="mobile search icon"
            title="search items"
            className="cursor-pointer"
          />
          <img
            src={PathImage.userIcon}
            alt="User icon"
            title="user profile"
            className="cursor-pointer"
          />
          <img
            src={PathImage.shoppingCart}
            alt="search Icon"
            title="cart"
            className="cursor-pointer"
          />
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
