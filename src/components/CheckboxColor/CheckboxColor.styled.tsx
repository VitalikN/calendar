import styled from "@emotion/styled";

export const BoxInputColor = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Label = styled.label`
  font-size: 20px;
  color: var(--color-text);
`;
export const ColorOption = styled.label`
  display: inline-block;
  width: 17px;
  height: 17px;
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
