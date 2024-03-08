import CheckboxColor from "../CheckboxColor/CheckboxColor";
import { monthsOfYear } from "../const";
import {
  ArrowBack,
  ArrowForward,
  Box,
  BoxSearch,
  Header,
  Input,
  Title,
} from "./HeaderCalendar.styled";

interface HeaderCalendarProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeaderCalendar: React.FC<HeaderCalendarProps> = ({
  currentDate,
  setCurrentDate,
  onSearchChange,
}) => {
  const prevMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <Header>
      <Box>
        <ArrowBack onClick={prevMonth} />

        <button onClick={goToToday}>Today</button>
        <ArrowForward onClick={nextMonth} />

        <Title>
          {monthsOfYear[currentDate.getMonth()]}
          {currentDate.getFullYear()}
        </Title>
      </Box>
      <BoxSearch>
        <Input type="text" placeholder="Search..." onChange={onSearchChange} />

        <CheckboxColor />

        <button>download image</button>
        <button>export</button>
      </BoxSearch>
    </Header>
  );
};

export default HeaderCalendar;
