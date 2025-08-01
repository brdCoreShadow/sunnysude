import styled from "@emotion/styled";

import bgHeaderMob from "../../assets/images/mobile/image-header.jpg";
import bgHeaderDesk from "../../assets/images/desktop/image-header.jpg";

export const HeaderLayout = styled.header`
  padding-top: 32px;
  padding-bottom: 296px;
  padding-left: 24px;
  padding-right: 24px;

  background-image: url(${bgHeaderMob});

  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1280px) {
    padding-top: 34px;
    padding-bottom: 536px;
    padding-left: 40px;
    padding-right: 40px;

    background-image: url(${bgHeaderDesk});
  }
`;
