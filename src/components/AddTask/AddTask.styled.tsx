import styled from "@emotion/styled";
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
