import styled from "@emotion/styled";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export const Header = styled.section`
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
  color: var(--color-text);
  font-size: 20px;
  transition: all 0.5s;
  &:hover,
  &:focus {
    scale: 1.5;
  }
`;
export const ArrowBack = styled(MdOutlineArrowBackIos)`
  cursor: pointer;
  color: var(--color-text);
  font-size: 20px;
  transition: all 0.5s;
  &:hover,
  &:focus {
    scale: 1.5;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  display: flex;
  font-family: "FiraSans";
  padding: 10px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: var(--color-btn);
  font-size: 15px;
  border: none;
  outline: none;
  background-color: var(--background-btn);
  box-shadow: var(--box-shadow);
  transition: all 0.5s;
  &:hover {
    scale: 1.05;
    box-shadow: var(--box-shadow-hover);
    background-color: var(--background-hover-btn);
    color: var(--color-hover);
  }
`;

export const Title = styled.h2`
  margin-left: auto;
  text-align: center;
  font-family: "FiraSans";
  color: var(--color-text);
  font-size: 20px;
  font-weight: 500;
  line-height: 18px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    font-weight: 500;
    line-height: 20px;
  }
`;
export const BoxSearch = styled.div`
  display: flex;
  font-family: "FiraSans";
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    max-width: 350px;
  }
`;

export const Input = styled.input`
  resize: none;
  border-radius: 10px;
  color: var(--color-text);
  background: none;
  border: none;
  padding: 10px;
  font-family: "FiraSans";
  font-size: 16px;
  box-shadow: var(--box-shadow);
  transition: all 0.5s;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  &:hover,
  &:focus {
    scale: 1.05;
    box-shadow: var(--box-shadow-hover);
    background-color: var(--background-input);
    color: var(--color-hover);
    outline: none;
  }
`;
export const StyledlabelFile = styled.label`
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: var(--color-label);
  font-size: 15px;
  border: none;
  outline: none;
  background-color: var(--background-btn);
  box-shadow: var(--box-shadow);
  transition: all 0.5s;
  &:hover {
    scale: 1.05;
    box-shadow: var(--box-shadow-hover);
    background-color: var(--background-hover-btn);
  }
`;
