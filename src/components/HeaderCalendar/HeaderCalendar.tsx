import { monthsOfYear } from "../const";
import {
  ArrowBack,
  ArrowForward,
  Box,
  BoxSearch,
  Header,
  Title,
} from "./HeaderCalendar.styled";

interface HeaderCalendarProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const HeaderCalendar: React.FC<HeaderCalendarProps> = ({
  currentDate,
  setCurrentDate,
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
        <input type="text" placeholder="Search..." />
        <input type="text" placeholder="filter labels..." />

        <button>download image</button>
        <button>export</button>
      </BoxSearch>
    </Header>
  );
};

export default HeaderCalendar;
