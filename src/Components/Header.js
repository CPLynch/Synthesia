import React from "react";

//Components
import { HeaderBar, Heading, ColorBar } from "./StyledComponents/Header";

export default function Header() {
  return (
    <HeaderBar>
      <Heading>HackerNews <ColorBar/></Heading>
    </HeaderBar>
  );
}
