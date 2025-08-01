import { ILayout } from "@/utils/types";
import * as SC from "./NavListStyled"

const NavList:React.FC<ILayout> = ({layout}) => {
  return (
    <SC.NavListStyled layout={layout}>
      <SC.NavListItem layout={layout}>
        <a href="#">About</a>
      </SC.NavListItem>
      <SC.NavListItem layout={layout}>
        <a href="#">Services</a>
      </SC.NavListItem>
      <SC.NavListItem layout={layout}>
        <a href="#">Projects</a>
      </SC.NavListItem>
    </SC.NavListStyled>
  );
};

export default NavList;
