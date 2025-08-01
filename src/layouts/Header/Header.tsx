import * as SC from "./HeaderStyled";

import { IChildProps } from "@/utils/types";

const Header: React.FC<IChildProps> = ({ children }) => {
  return <SC.HeaderLayout>{children}</SC.HeaderLayout>;
};

export default Header;
