import styled from "@emotion/styled";

export const GridList = styled.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 0;

`

export const GridItem = styled.li`

& > img{
    width: 188px;
    height: 188px;
}
`