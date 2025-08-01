import * as SC from "./SocNetStyled"

import facebookIcon from "../../assets/images/icon-facebook.svg"
import instagramIcon from "../../assets/images/icon-instagram.svg"
import twitterIcon from "../../assets/images/icon-twitter.svg"
import pinterestIcon from "../../assets/images/icon-pinterest.svg"

const SocNet:React.FC = () => {
  return (
    <SC.SocNetStyled>
      <li>
        <a href="https://www.facebook.com/sasha.berdichevsky/">
          <img src={facebookIcon} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/berd__man/">
        <img src={instagramIcon} alt="instagram" /></a>
      </li>
      <li>
        <a href="https://x.com/UaBerd">
        <img src={twitterIcon} alt="twitter" /></a>
      </li>
      <li>
        <a href="https://ru.pinterest.com/brdcore/">
        <img src={pinterestIcon} alt="pinterest" /></a>
      </li>
    </SC.SocNetStyled>
  );
};

export default SocNet;
