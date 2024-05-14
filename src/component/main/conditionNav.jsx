import MobileNavBar from "./MobileNavBar";
import NavigationBar from "./navigationBar";
let width = window.innerWidth;
function ConditionNav() {
  if (width <= 1280) {
    return <MobileNavBar />;
  } else {
    return <NavigationBar />;
  }
}

export default ConditionNav;
