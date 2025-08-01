import * as SC from "./HeaderDashBoardStyled"

import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";

const HeaderDashBoard: React.FC = () => {
  return (
    <SC.HeaderDashBoardCon>
      <Logo layout="header"/>
      <BurgerBtn/>
    </SC.HeaderDashBoardCon>
  );
};

export default HeaderDashBoard;
