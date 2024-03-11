import styled from "@emotion/styled";
import { Field, Form as form } from "formik";
import { IoClose } from "react-icons/io5";

export const BoxContent = styled.div`
  position: relative;
  max-width: 500px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: "FiraSans";
  padding: 30px 20px;
  margin: 0 auto;
  margin-top: 50px;

  border-radius: 10px;
  background: var(--background-form);
  color: var(--color-text);
`;
export const IconClose = styled(IoClose)`
  cursor: pointer;
  position: absolute;

  right: 10px;
  top: 10px;
  font-size: 20px;
  transition: all 0.5s;

  &:hover,
  &:focus {
    scale: 1.2;
  }
`;
export const Form = styled(form)`
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 17px;
  width: 100%;
  font-family: "FiraSans";
`;
export const BoxInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
export const Input = styled(Field)`
  resize: none;
  font-family: "FiraSans";

  border-radius: 10px;
  background-color: var(--background-input-form);
  color: var(--color-text);
  border: none;
  padding: 10px;
  font-size: 16px;
  box-shadow: var(--box-shadow);
  transition: all 0.5s;
  &:hover,
  &:focus {
    scale: 1.04;
    box-shadow: var(--box-shadow-hover);
    background-color: var(--hover-background-input);
    color: var(--color-hover);
    outline: none;
  }
`;
export const ErrorAdd = styled.span`
  font-size: 10px;
  font-family: "FiraSans";

  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: var(--color-error);
  position: absolute;
  left: 10px;
  bottom: -15px;
  opacity: 0.9;
`;

export const BoxInputColor = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 20px;
`;
export const ColorOption = styled.label`
  display: inline-block;

  width: 17px;
  height: 17px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

export const ColorInput = styled(Field)`
  display: none;
  &:checked + span::before {
    opacity: 1;
  }
`;

export const ColorIndicator = styled.span`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: relative;
  transition: all 0.5s;
  &:focus,
  &:hover {
    scale: 1.05;
    box-shadow: var(--box-shadow-hover);
  }

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: var(--border);
    opacity: 0;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  display: flex;
  padding: 9px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  background-color: var(--background-btn-form);
  color: var(--color-text);
  font-family: "FiraSans";

  font-size: 18px;
  border: none;
  outline: none;
  box-shadow: var(--box-shadow);
  transition: all 0.5s;
  &:focus,
  &:hover {
    scale: 1.05;
    box-shadow: var(--box-shadow-hover);
    background-color: var(--background-hover-btn);
    color: var(--color-hover);
  }
`;
