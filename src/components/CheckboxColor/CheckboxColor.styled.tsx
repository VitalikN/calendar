import styled from "@emotion/styled";

export const BoxInputColor = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
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
export const ColorInput = styled.input`
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
