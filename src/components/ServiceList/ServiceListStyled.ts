import styled from "@emotion/styled";

import cherryPicMob from "../../assets/images/mobile/image-graphic-design.jpg";
import orangePicMob from "../../assets/images/mobile/image-photography.jpg";
import cherryPicDesk from "../../assets/images/desktop/image-graphic-design.jpg";
import orangePicDesk from "../../assets/images/desktop/image-photography.jpg";

export const ServiceListStyled = styled.ul`
  margin-bottom: 64px;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 160px;
  }
`;

export const ServiceItem = styled.li`
  padding-top: 398px;
  padding-bottom: 60px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  @media (min-width: 1280px) {
    width: 50%;

    padding-left: 190px;
    padding-right: 190px;
  }

  & > h3 {
    margin-bottom: 28px;

    font-size: 28px;
    letter-spacing: -0.2px;
    font-weight: 900;

    color: #24554a;
  }

  & > p {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.7;
    letter-spacing: -0.11px;

    color: #24554a;

    @media (min-width: 1280px) {
      text-wrap: wrap;
    }
  }

  &.cherry {
    background-image: url(${cherryPicMob});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 1280px) {
      background-image: url(${cherryPicDesk});
    }
  }

  &.orange {
    background-image: url(${orangePicMob});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 1280px) {
      background-image: url(${orangePicDesk});
    }
  }
`;
