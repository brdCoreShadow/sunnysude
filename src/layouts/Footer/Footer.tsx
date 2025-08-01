import * as SC from "./FooterStyled"

import { IChildProps } from "@/utils/types";

const Footer:React.FC<IChildProps> = ({children}) => {
    return ( 
        <SC.FooterCon>
            {children}
        </SC.FooterCon>
     );
}
 
export default Footer;