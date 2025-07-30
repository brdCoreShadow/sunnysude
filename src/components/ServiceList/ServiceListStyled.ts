import styled from "@emotion/styled";

import cherryPicMob from "../../assets/images/mobile/image-graphic-design.jpg";
import orangePicMob from "../../assets/images/mobile/image-photography.jpg";

export const ServiceListStyled = styled.ul`
  margin-bottom: 64px;
`;

export const ServiceItem = styled.li`
  padding-top: 398px;
  padding-bottom: 60px;
  padding-left: 24px;
  padding-right: 24px;

  &.cherry {
    background-image: url(${cherryPicMob});
    background-repeat: no-repeat;
    background-size: cover;
  }

  &.orange {
    background-image: url(${orangePicMob});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
