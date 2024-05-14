import { useState } from "react";
import PathImage from "../../constant/imagePath";
import NavItems from "../custom/navItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function MobileNavBar() {
  const [active, setActive] = useState(false);

  const updateMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="py-2.5 px-3.5 flex justify-between relative border-b border-color border-solid">
      <div className="flex items-center gap-5">
        <button onClick={updateMenu}>
          <img src={PathImage.mobileMenu} alt="mobile menu" />
        </button>
        <div
          className={`absolute ${active ? "mobile-nav active" : "mobile-nav"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex items-center justify-center flex-col ">
            <NavItems
              ItemText="Sets"
              paddingL="0"
              paddingR="20px"
              borderPara="b"
            />
            <NavItems
              ItemText="Sets"
              paddingL="0"
              paddingR="20px"
              borderPara="b"
            />
          </ul>
        </div>
        <div className="flex items-center border-r">
          <img
            src={PathImage.lashes}
            alt="miss lashes"
            className="w-2/3 py-3.5 pr-2.5"
          />
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      <div className="flex gap-5">
        <img src={PathImage.mobileSearch} alt="mobile search icon" />
        <img src={PathImage.userIcon} alt="User icon" />
        <img src={PathImage.shoppingCart} alt="search Icon" />
      </div>
    </nav>
  );
}

export default MobileNavBar;
