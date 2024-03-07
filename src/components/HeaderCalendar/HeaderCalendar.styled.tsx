import styled from "@emotion/styled";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: space-between;

  align-items: center;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ArrowForward = styled(MdOutlineArrowForwardIos)`
  cursor: pointer;
  color: #fe9903;
  font-size: 20px;
  transition: all 0.5s;
  &:hover,
  &:focus {
    scale: 1.5;
  }
`;
export const ArrowBack = styled(MdOutlineArrowBackIos)`
  cursor: pointer;
  color: #fe9903;
  font-size: 20px;
  transition: all 0.5s;
  &:hover,
  &:focus {
    scale: 1.5;
  }
`;

export const Title = styled.h2`
  margin-left: auto;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  line-height: 18px;
  @media screen and (min-width: 768px) {
    /* width: 205px; */
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
  }
`;
export const BoxSearch = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
