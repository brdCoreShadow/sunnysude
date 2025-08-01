import * as SC from "./AboutListStyled";

import eggPicMob from "../../assets/images/mobile/image-transform.jpg";
import glassPicMob from "../../assets/images/mobile/image-stand-out.jpg";
import eggPicDesk from "../../assets/images/desktop/image-transform.jpg";
import glassDeskPic from "../../assets/images/desktop/image-stand-out.jpg";
import { useScreenSize } from "@/hooks/useScreenSize";

const AboutList: React.FC = () => {
  const { isDesktop } = useScreenSize();

  return (
    <SC.AboutListStyled>
      <SC.AboutItem>
        <SC.AboutPicThumb>
          <img src={isDesktop ? eggPicDesk : eggPicMob} alt="egg" />
        </SC.AboutPicThumb>
        <SC.AboutContentCon className="yellow">
          <h3>Transform your brand</h3>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button>learn more</button>
        </SC.AboutContentCon>
      </SC.AboutItem>
      <SC.AboutItem>
        <SC.AboutPicThumb>
          <img src={isDesktop ? glassDeskPic : glassPicMob} alt="glass" />
        </SC.AboutPicThumb>
        <SC.AboutContentCon className="red">
          <h3>Stand out to the right audience</h3>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.{" "}
          </p>
          <button>learn more</button>
        </SC.AboutContentCon>
      </SC.AboutItem>
    </SC.AboutListStyled>
  );
};

export default AboutList;
