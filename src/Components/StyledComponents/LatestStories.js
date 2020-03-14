import styled from "styled-components";

export const LatestStoriesSection = styled.section`
  width: 100%;
  min-height: 0px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  background-color: white;
`;
export const Story = styled.article`
  position: relative;
  padding: 16px 24px;
   &:hover {
    & h3 {
        text-decoration: underline;
    }
  }
  &:before {
    content: "";
    position: absolute;
    left: 5%;
    top: 0;
    height: 1px;
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  }
`;
export const LatestHeading = styled.h2`
  font-size: 20px;
  padding: 16px 22px;
`;
