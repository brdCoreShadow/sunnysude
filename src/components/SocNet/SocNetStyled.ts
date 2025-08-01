import styled from "@emotion/styled";

export const SocNetStyled = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

& > li:not(:last-of-type){
    margin-right: 28px;
}
`