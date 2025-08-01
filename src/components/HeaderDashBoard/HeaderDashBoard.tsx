import * as SC from "./HeaderDashBoardStyled";

import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import { IShare } from "@/utils/types";
import { useScreenSize } from "@/hooks/useScreenSize";
import NavList from "../NavList/NavList";
import ContactBtn from "../ContactBtn/ContactBtn";

const HeaderDashBoard: React.FC<Partial<IShare>> = ({ openShare }) => {
  const { isDesktop } = useScreenSize();

  return (
    <SC.HeaderDashBoardCon>
      <Logo layout="header" />
      {isDesktop ? (
        <SC.DeskFlexCon>
        <NavList layout="header" />
        <ContactBtn/>
        </SC.DeskFlexCon>
      ) : (
        <BurgerBtn openShare={openShare} />
      )}
    </SC.HeaderDashBoardCon>
  );
};

export default HeaderDashBoard;
