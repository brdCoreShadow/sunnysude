import styled from "@emotion/styled";

export const FeedbackCon = styled.div`
  margin-bottom: 86px;

  & > h3 {
    margin-bottom: 64px;

    text-transform: uppercase;

    font-size: 16px;
    letter-spacing: 4px;

    color: #a7aaad;
  }
`;

export const FeedbackItem = styled.li`
text-align: center;

  &:not(:last-of-type) {
    margin-bottom: 64px;
  }
`;

export const AvaThumb = styled.div`
display: inline-block;

width: 72px;
height: 72px;

border-radius: 50%;

overflow: hidden;
`