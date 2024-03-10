import CheckboxColor from "../CheckboxColor/CheckboxColor";
import { monthsOfYear, HeaderCalendarProps } from "../utils";
import {
  ArrowBack,
  ArrowForward,
  Box,
  BoxSearch,
  Header,
  Input,
  Title,
  Btn,
  StyledlabelFile,
} from "./HeaderCalendar.styled";
import { useHeaderCalendar } from "../hooks";

const HeaderCalendar: React.FC<HeaderCalendarProps> = ({
  setCurrentDate,
  calendarRef,
  combinedData,
}) => {
  const {
    prevMonth,
    nextMonth,
    goToToday,
    handleSearchChange,
    handleDownloadImage,
    handleImportChange,
    handleExportClick,
  } = useHeaderCalendar({ combinedData, calendarRef, setCurrentDate });
  const currentDate = new Date();
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
          placeholder="Task search"
          onChange={handleSearchChange}
        />

        <CheckboxColor />
      </BoxSearch>
      <BoxSearch>
        <Btn type="button" onClick={handleDownloadImage}>
          Download image
        </Btn>
        <StyledlabelFile>
          <input
            type="file"
            onChange={handleImportChange}
            style={{ display: "none" }}
          />
          Import
        </StyledlabelFile>

        <Btn type="button" onClick={handleExportClick}>
          Export
        </Btn>
      </BoxSearch>
    </Header>
  );
};

export default HeaderCalendar;
