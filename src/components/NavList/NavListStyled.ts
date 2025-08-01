import { ILayout } from "@/utils/types";
import styled from "@emotion/styled";

export const NavListStyled = styled.ul<ILayout>`
  margin-bottom: ${({ layout }) => (layout === "footer" ? "88px" : "32px")};

  display: ${({ layout }) => (layout === "footer" ? "flex" : "block")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  margin-bottom: ${({ layout }) => (layout === "footer" ? "88px" : "0")};

    margin-right: ${({ layout }) => (layout === "header" && "48px")};
  }
`;

export const NavListItem = styled.li<ILayout>`
  margin-bottom: ${({ layout }) => (layout === "burger" ? "32px" : "0")};

  @media (min-width: 1280px) {
    &:not(:last-of-type) {
      margin-right: ${({ layout }) => (layout === "header" ? "48px" : "56px")};
    }
  }

  & > a {
    font-size: ${({ layout }) => (layout === "footer" ? "18px" : "20px")};
    line-height: ${({ layout }) => (layout === "footer" ? "1.4" : "1.3")};
    letter-spacing: ${({ layout }) =>
      layout === "footer" ? "-0.13px" : "-0.14px"};
    font-weight: 600;

    color: ${({ layout }) => (layout === "footer" ? "#458D7E" : "#808397")};

    @media (min-width: 1280px) {
      font-size: 18px;
      line-height: 1.4;
      letter-spacing: -0.13px;

      color: ${({ layout }) => (layout === "header" ? "#fff" : "#458D7E")};

      transition: color 0.3s;

      &:hover,
      &:active,
      &:focus {
        color: ${({ layout }) => layout === "footer" && "#fff"};

        transition: color 0.3s;
        cursor: pointer;
      }
    }
  }
`;
