import { ILayout } from "@/utils/types";
import styled from "@emotion/styled";

export const NavListStyled = styled.ul<ILayout>`
  margin-bottom: ${({ layout }) => (layout === "footer" ? "88px" : "32px")};

  display: ${({ layout }) => (layout === "footer" ? "flex" : "block")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavListItem = styled.li<ILayout>`
margin-bottom: ${({layout}) => layout==="burger" ? "32px" : "0"};

  & > a {
    font-size: ${({ layout }) => (layout === "footer" ? "18px" : "20px")};
    line-height: ${({ layout }) => (layout === "footer" ? "1.4" : "1.3")};
    letter-spacing: ${({ layout }) =>
      layout === "footer" ? "-0.13px" : "-0.14px"};
    font-weight: 600;

    color: ${({ layout }) => (layout === "footer" ? "#458D7E" : "#808397")};
  }
`;
