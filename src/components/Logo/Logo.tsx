import * as SC from "./LogoStyled"

import logoIcon from "../../assets/images/logo.svg"

const Logo:React.FC = () => {
    return ( 
        <SC.LogoCon>
            <img src={logoIcon} alt="logo" />
        </SC.LogoCon>
     );
}
 
export default Logo;