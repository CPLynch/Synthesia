import React from "react";
import styled from "styled-components";

//Components
import { HeaderBar, Heading } from "./StyledComponents/Header";

export default function Header() {
  return (
    <HeaderBar>
      <Heading>HackerNews</Heading>
    </HeaderBar>
  );
}
