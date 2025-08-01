import styled from "@emotion/styled";

export const AboutListStyled = styled.ul`
  margin-bottom: 64px;
`;

export const AboutItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 64px;
  }
`;

export const AboutPicThumb = styled.div`
  margin-bottom: 64px;
`;

export const AboutContentCon = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  & > h3 {
    margin-bottom: 24px;

    font-size: 32px;
    font-weight: 900;
    letter-spacing: -0.23px;

    color: #24303e;
  }

  & > p {
    margin-bottom: 32px;

    font-size: 18px;
    line-height: 1.7;
    letter-spacing: -0.13px;
    font-weight: 600;

    color: #808397;
    opacity: 0.7;
  }

  & > button {
    text-transform: uppercase;

    font-weight: 900;
    line-height: 1.7;
    letter-spacing: 1px;

    background-color: transparent;
    color: #24303e;
  }

  &.yellow {
    & > button {

      border-bottom: 1px solid #fad400;
    }
  }

   &.red {
    & > button {

      border-bottom: 1px solid #FE7766;
    }
  }
`;
