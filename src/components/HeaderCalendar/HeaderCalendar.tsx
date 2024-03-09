import { useDispatch } from "react-redux";
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
  Btn,
} from "./HeaderCalendar.styled";
import { setSearchText } from "@/redux/tasks/tasksSlice";

interface HeaderCalendarProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const HeaderCalendar: React.FC<HeaderCalendarProps> = ({
  currentDate,
  setCurrentDate,
}) => {
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

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

        <Btn type="button" onClick={goToToday}>
          Today
        </Btn>
        <ArrowForward onClick={nextMonth} />

        <Title>
          {monthsOfYear[currentDate.getMonth()]}
          {currentDate.getFullYear()}
        </Title>
      </Box>
      <BoxSearch>
        <Input
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
        />

        <CheckboxColor />

        <Btn type="button">download image</Btn>
        <Btn type="button">export</Btn>
      </BoxSearch>
    </Header>
  );
};

export default HeaderCalendar;
