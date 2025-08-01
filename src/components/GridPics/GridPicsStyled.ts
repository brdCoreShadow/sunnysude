import styled from "@emotion/styled";

export const GridList = styled.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 0;

@media (min-width: 1280px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
`

export const GridItem = styled.li`

& > img{
    width: 188px;
    height: 188px;

    @media (min-width: 1280px){
        width: auto;
        height: auto;
    }
}
`