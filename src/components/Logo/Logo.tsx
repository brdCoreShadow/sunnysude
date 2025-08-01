import * as SC from "./LogoStyled"

import { ILayout } from "@/utils/types";

const Logo:React.FC<ILayout> = ({layout}) => {
    return ( 
        <SC.LogoCon layout={layout}>
          <h1>sunnyside</h1>
        </SC.LogoCon>
     );
}
 
export default Logo;