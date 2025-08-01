import * as SC from "./BurgerMenuStyled"

import NavList from "../NavList/NavList";
import ContactBtn from "../ContactBtn/ContactBtn";

const BurgerMenu:React.FC = () => {

    return ( 
        <SC.Wrapper >
            <SC.BurgerMenuCon>
                <NavList layout="burger"/>
                <ContactBtn/>
            </SC.BurgerMenuCon>
        </SC.Wrapper>
     );
}
 
export default BurgerMenu;