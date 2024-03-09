import styled from "@emotion/styled";

import { MdOutlineCreate, MdDeleteForever } from "react-icons/md";

interface BoxDayProps {
  isToday: boolean;
}

export const Section = styled.section`
  padding: 30px 0;
`;

export const ContainerCalendar = styled.section`
  padding: 30px 0;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(7, 1fr);
  overflow: auto;
  font-family: "FiraSans";
`;

export const BoxDay = styled.div<BoxDayProps>`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100px;
  padding: 5px;
  font-family: "FiraSans";

  border-radius: 5px;
  background-color: ${(props) =>
    props.isToday
      ? "var(--background-hover-btn)"
      : "var(--background-color-day)"};
  border: 1px solid
    ${(props) =>
      props.isToday ? "var(--color-text)" : "var(--background-color-day)"};
  color: ${(props) =>
    props.isToday ? "var(--color-hover)" : "var(--color-text)"};
  overflow: auto;

  transition: all 0.5s;
  @media screen and (min-width: 1280px) {
    min-height: 170px;
  }

  &:hover,
  &:focus {
    background-color: var(--background-hover-btn);
    color: var(--color-hover);
  }
`;
export const Holiday = styled.div`
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;
  gap: 3px;
  overflow: auto;
`;
export const TaskBox = styled.div`
  color: var(--color-text);

  font-size: 13px;
  background-color: var(--background-color-task);
  border-radius: 5px;
  padding: 5px;
`;
export const ColorBox = styled.div`
  display: flex;
  gap: 5px;
`;
export const Color = styled.span`
  height: 6px;
  width: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
`;
export const Text = styled.p`
  padding: 5px 0;
`;

export const Create = styled(MdOutlineCreate)`
  cursor: pointer;

  font-size: 20px;
  transition: all 0.5s;
  &:hover,
  &:focus {
    scale: 1.2;
    color: var(--color-text);
  }
`;
export const Delete = styled(MdDeleteForever)`
  cursor: pointer;
  font-size: 20px;
  transition: all 0.5s;

  &:hover,
  &:focus {
    scale: 1.2;
    color: var(--color-text);
  }
`;
