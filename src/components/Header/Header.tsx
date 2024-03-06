import Link from "next/link";
import { Container } from "../Container.styled";
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
