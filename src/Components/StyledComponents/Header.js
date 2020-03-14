import styled from "styled-components";

export const HeaderBar = styled.header`
  -webkit-box-shadow: 0px 4px 14px 0px rgba(107, 107, 107, 1);
  -moz-box-shadow: 0px 4px 14px 0px rgba(107, 107, 107, 1);
  box-shadow: 0px 4px 14px 0px rgba(107, 107, 107, 1);
  width: 100%;
  margin-bottom: 40px;
  padding: 20px 0px;
  background-color: #000000;
`;

export const Heading = styled.h1`
  font-size: 25px;
  padding-left: 40px;
  color: white;
  font-style: italic;
`;

export const ColorBar = styled.span`
    height:4px;
    width: 40px;
    display: inline-block;
    background-color:#FF6600; 
    position: relative;
    bottom: 5px;
    transform: skew(-18deg);
`
