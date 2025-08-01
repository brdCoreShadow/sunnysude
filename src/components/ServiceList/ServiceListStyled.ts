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

  text-align: center;

  & > h3 {
    margin-bottom: 28px;

    font-size: 28px;
    letter-spacing: -0.2px;
    font-weight: 900;

    color: #24554a;
  }

  & > p{
    font-size: 16px;
    font-weight: 600;
    line-height: 1.7;
    letter-spacing: -0.11px;

    color: #24554A;
  }

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
