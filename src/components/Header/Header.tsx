"use client";

import { Container } from "../utils";
import { HeaderStyled, LinkStyled, Nav, Title } from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <Title>Calendar</Title>
          <p>
            Developer:
            <LinkStyled href="https://github.com/VitalikN" target="_blank">
              Vitalii Nozhenko
            </LinkStyled>
          </p>
        </Nav>
      </Container>
    </HeaderStyled>
  );
};
export default Header;
