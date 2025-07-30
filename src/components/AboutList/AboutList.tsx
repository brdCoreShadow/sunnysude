import * as SC from "./AboutListStyled";

import eggPicMob from "../../assets/images/mobile/image-transform.jpg";
import glassPicMob from "../../assets/images/mobile/image-stand-out.jpg";

const AboutList: React.FC = () => {
  return (
    <SC.AboutListStyled>
      <SC.AboutItem>
        <SC.AboutPicThumb>
          <img src={eggPicMob} alt="egg" />
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
          <img src={glassPicMob} alt="glass" />
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
