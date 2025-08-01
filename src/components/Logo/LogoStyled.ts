import { ILayout } from "@/utils/types";
import styled from "@emotion/styled";

export const LogoCon = styled.div<ILayout>`
margin-bottom: ${({layout}) => layout === "footer" ? "40px" : "0"};

font-size: ${({layout}) => layout === "header" ? "16px" : "20px"};

color:${({layout}) => layout === "header" ? "#fff" : "#2C7566"}
`