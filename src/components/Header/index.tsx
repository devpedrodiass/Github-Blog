import React from "react";
import { HeaderContainer } from "./styles";

import techBg from "../../assets/tech-bg.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={techBg} alt="GITHUB BLOG LOGO"></img>
    </HeaderContainer>
  );
}
