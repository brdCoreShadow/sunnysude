import styled from "@emotion/styled";

export const FeedbackCon = styled.div`
  margin-bottom: 86px;

  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

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

  margin-bottom: 32px;

  border-radius: 50%;

  overflow: hidden;
`;

export const Content = styled.p`
  margin-bottom: 32px;

  font-size: 18px;
  line-height: 1.8;
  letter-spacing: -0.13px;
  font-weight: 600;

  color: #5b636d;
`;

export const Name = styled.h4`
  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 900;
  letter-spacing: -0.13px;
`;

export const Position = styled.p`
  font-size: 14px;
  line-height: 1.8;
  letter-spacing: -0.1px;
  font-weight: 600;

  color: #a7aaad;
  opacity: 0.7;
`;
