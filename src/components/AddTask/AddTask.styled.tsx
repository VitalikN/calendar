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

  padding: 30px 20px;
  margin: 0 auto;
  margin-top: 50px;

  border-radius: 10px;
  background: linear-gradient(to right, #fe9903, #ea7d01, #fea903);
  color: #fff;
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
  border-radius: 10px;
  color: #f2f2f2;
  background: none;
  border: none;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.5s;
  &:hover,
  &:focus {
    scale: 1.07;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    background-color: #fde8d2;
    color: #fe9903;
    outline: none;
  }
`;
export const ErrorAdd = styled.span`
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: red;
  position: absolute;
  left: 10px;
  bottom: -15px;
  opacity: 0.9;
`;

export const BoxInputColor = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
export const ColorOption = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
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
    border: 2px solid #fff;
    opacity: 0;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: #fff;
  font-size: 15px;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  transition: all 0.5s;
  &:hover {
    scale: 1.05;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    background-color: #fde8d2;
    color: #fe9903;
  }
`;
