import styled from "@emotion/styled";

interface BoxDayProps {
  isToday: boolean;
}

export const Section = styled.section`
  padding: 30px 0;
`;

export const ContainerCalendar = styled.div`
  padding: 30px 0;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(7, 1fr);
  overflow: auto;
`;

export const BoxDay = styled.div<BoxDayProps>`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => (props.isToday ? "#fde8d2" : "#ebebeb")};
  border: 1px solid ${(props) => (props.isToday ? "#fe9903" : "#ebebeb")};
  color: ${(props) => (props.isToday ? "#fe9903" : "black")};
  overflow: auto;
  transition: all 0.5s;
  @media screen and (min-width: 1280px) {
    min-height: 170px;
  }

  &:hover,
  &:focus {
    background-color: #fde8d2;
    color: #fe9903;
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
  color: #fff;
  font-size: 0.8rem;
  background-color: #fe9903;
  border-radius: 5px;
  padding: 5px;
`;
export const ColorBox = styled.div`
  display: flex;
  gap: 5px;
`;
export const Color = styled.span`
  height: 10px;
  width: 30px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
`;
export const Text = styled.p``;
