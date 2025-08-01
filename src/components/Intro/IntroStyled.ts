import styled from "@emotion/styled";

export const IntroCon = styled.div`
  position: relative;

  text-align: center;

  & > h1 {
    text-transform: uppercase;

    font-size: 40px;
    letter-spacing: 6.25px;
    font-weight: 900;

    color: #fff;
  }

  &::after {
    position: absolute;
    z-index: 3;

    bottom: 0;
    left: 50%;

    transform: translate(-50%, 135%);

    content: "";
    display: inline-block;
    width: 35px;
    height: 142px;

    background-image: url("data:image/svg+xml;utf8,<svg width='36' height='114' xmlns='http://www.w3.org/2000/svg'><g stroke='%23FFF' stroke-width='6' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'><path d='M18 3v100M3 95.484l15 15 15-15'/></g></svg>");

    background-repeat: no-repeat;
  }
`;
