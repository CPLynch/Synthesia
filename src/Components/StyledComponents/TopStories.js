import styled from "styled-components";

export const TopStoriesSection = styled.section`
  width: 100%;
  min-height: 280px;
  padding-right: 60px;
  @media only screen and (max-width: 700px) {
    padding-right: 0px;
  }
`;
export const Story = styled.article`
  margin-bottom: 20px;
  background-color: white;
  & h3 {
    font-size: ${props => (props.main ? "32px" : "20px")};
  }
  padding: 17px 26px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  @media only screen and (max-width: 700px) {
    padding: 14px 22px;
    margin-bottom: 12px;
    h3 {
      font-size: ${props => (props.main ? "20px" : "16px")};
    }
    p {
      font-size: 13px;
    }
    small {
      font-size: 13px;
    }
  }
`;
