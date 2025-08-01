import * as SC from "./HeaderDashBoardStyled";

import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import { IShare } from "@/utils/types";

const HeaderDashBoard: React.FC<Partial<IShare>> = ({openShare}) => {

  return (
    <SC.HeaderDashBoardCon>
      <Logo layout="header" />
      <BurgerBtn openShare={openShare}/>
    </SC.HeaderDashBoardCon>
  );
};

export default HeaderDashBoard;
