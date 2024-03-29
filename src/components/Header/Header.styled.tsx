import styled from "@emotion/styled";
import Link from "next/link";

export const HeaderStyled = styled.header`
  background: var(--background-header);
  color: var(--color-header);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  @media screen and (min-width: 768px) {
    font-size: 25px;

    line-height: 25px;
  }
`;
export const LinkStyled = styled(Link)`
  font-size: 13px;
  padding: 22px 8px;
  transition: all 0.5s;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  &:hover,
  &:focus {
    font-size: 14px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;
