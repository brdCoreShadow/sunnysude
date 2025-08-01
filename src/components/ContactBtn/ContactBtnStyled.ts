import styled from "@emotion/styled";

export const ContactBtnStyled = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;

  text-transform: uppercase;

  font-size: 15px;
  line-height: 1.7;
  letter-spacing: -0.11px;
  font-weight: 700;

  background-color: #fbd600;
  color: #24303e;

  border-radius: 28px;

  @media (min-width: 1280px) {
    background-color: #fff;
    color: #24303e;

    transition: all 0.3s;

    &:hover,
    &:focus,
    &:active {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.3);

      transition: all 0.3s;

      cursor: pointer;
    }
  }
`;
