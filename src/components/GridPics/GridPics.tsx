import * as SC from "./GridPicsStyled";

import coneMob from "../../assets/images/mobile/image-gallery-cone.jpg";
import milkMob from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import sugarMob from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import orangeMob from "../../assets/images/mobile/image-gallery-orange.jpg";
import coneDesk from "../../assets/images/desktop/image-gallery-cone.jpg";
import milkDesk from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import sugarDesk from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";
import orangeDesk from "../../assets/images/desktop/image-gallery-orange.jpg";
import { useScreenSize } from "@/hooks/useScreenSize";

const GridPics: React.FC = () => {
  const { isDesktop } = useScreenSize();

  return (
    <SC.GridList>
      <SC.GridItem>
        <img src={isDesktop ? milkDesk : milkMob} alt="milk" />
      </SC.GridItem>
      <SC.GridItem>
        <img src={isDesktop ? orangeDesk : orangeMob} alt="orange" />
      </SC.GridItem>
      <SC.GridItem>
        <img src={isDesktop ? coneDesk : coneMob} alt="cone" />
      </SC.GridItem>
      <SC.GridItem>
        <img src={isDesktop ? sugarDesk : sugarMob} alt="sugar" />
      </SC.GridItem>
    </SC.GridList>
  );
};

export default GridPics;
