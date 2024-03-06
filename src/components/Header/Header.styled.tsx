import styled from "@emotion/styled";
import Link from "next/link";

export const HeaderStyled = styled.header`
  background: linear-gradient(to right, #fe9903, #ea7d01, #fea903);
  color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
`;
export const Title = styled.h1`
  font-size: 21px;
  font-weight: 600;
  line-height: 20px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    font-weight: 600;
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
    font-size: 15px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;
