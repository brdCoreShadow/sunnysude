import * as SC from "./BurgerBtnStyled"
import { IShare } from "@/utils/types";

const BurgerBtn:React.FC<Partial <IShare>> = ({openShare}) => {


    return ( 
        <SC.BurgerBtnStyled type="button" onClick={openShare}></SC.BurgerBtnStyled>
     );
}
 
export default BurgerBtn;