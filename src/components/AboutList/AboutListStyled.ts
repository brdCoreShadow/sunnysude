import styled from "@emotion/styled";

export const AboutListStyled = styled.ul`
  margin-bottom: 64px;

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const AboutItem = styled.li`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &:not(:last-of-type) {
    margin-bottom: 64px;

    @media (min-width: 1280px) {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 0;
    }
  }
`;

export const AboutPicThumb = styled.div`
  margin-bottom: 64px;

  @media (min-width: 1280px) {
    min-width: 50%;

    margin-bottom: 0;

    & > img {
      width: 100%;
    }
  }
`;

export const AboutContentCon = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  @media (min-width: 1280px) {
    padding-left: 165px;
    padding-right: 110px;

    text-align: left;
  }

  & > h3 {
    margin-bottom: 24px;

    font-size: 32px;
    font-weight: 900;
    letter-spacing: -0.23px;

    color: #24303e;

    @media (min-width: 1280px) {
      margin-bottom: 32px;

      font-size: 40px;
      letter-spacing: -0.29px;
    }
  }

  & > p {
    margin-bottom: 32px;

    font-size: 18px;
    line-height: 1.7;
    letter-spacing: -0.13px;
    font-weight: 600;

    color: #808397;
    opacity: 0.7;

    @media (min-width: 1280px) {
      margin-bottom: 40px;
    }
  }

  & > button {
    text-transform: uppercase;

    font-size: 15px;
    font-weight: 900;
    line-height: 1.7;
    letter-spacing: 1px;

    background-color: transparent;
    color: #24303e;

   &:hover, &:active, &:focus{
    cursor: pointer;
   }
  }

  &.yellow {
    & > button {
      border-bottom: 1px solid #fad400;
    }
  }

  &.red {
    & > button {
      border-bottom: 1px solid #fe7766;
    }
  }
`;
