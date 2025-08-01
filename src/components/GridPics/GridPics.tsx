import * as SC from "./GridPicsStyled"

import coneMob from "../../assets/images/mobile/image-gallery-cone.jpg";
import milkMob from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import sugarMob from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import orangeMob from "../../assets/images/mobile/image-gallery-orange.jpg";

const GridPics: React.FC = () => {
  return (
    <SC.GridList>
      <SC.GridItem>
        <img src={milkMob} alt="milk" />
      </SC.GridItem>
      <SC.GridItem>
        <img src={orangeMob} alt="orange" />
      </SC.GridItem>
      <SC.GridItem>
        <img src={coneMob} alt="cone" />
      </SC.GridItem>
      <SC.GridItem>
        <img src={sugarMob} alt="sugar" />
      </SC.GridItem>
    </SC.GridList>
  );
};

export default GridPics;
