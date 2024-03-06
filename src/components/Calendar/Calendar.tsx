import React, { useState } from "react";
import { Container } from "../Container.styled";

import {
  ArrowBack,
  ArrowForward,
  Box,
  BoxSearch,
  ContainerCalendar,
  HeaderCalendar,
  Section,
  Title,
} from "./Calendar.styled";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
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

  const renderCalendar = () => {
    const totalDays = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const days = [];

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    const renderEmptyCells = (count: number) => {
      const cells = [];
      for (let i = 0; i < count; i++) {
        cells.push(<div key={`empty-${i}`}></div>);
      }
      return cells;
    };

    return (
      <Section>
        <Container>
          <HeaderCalendar>
            <Box>
              <ArrowBack onClick={prevMonth} />

              <button onClick={goToToday}>Today</button>
              <ArrowForward onClick={nextMonth} />

              <Title>
                {monthsOfYear[currentDate.getMonth()]}{" "}
                {currentDate.getFullYear()}
              </Title>
            </Box>
            <BoxSearch>
              <input type="text" placeholder="Search..." />
              <input type="text" placeholder="filter labels..." />

              <button>download image</button>
              <button>export</button>
            </BoxSearch>
          </HeaderCalendar>
          <ContainerCalendar>
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
            {renderEmptyCells(firstDayOfMonth)}
            {days.map((day) => {
              const isToday =
                todayDate === day &&
                todayMonth === currentDate.getMonth() &&
                todayYear === currentDate.getFullYear();
              return (
                <div key={day} style={{ color: isToday ? "#0575e6" : "black" }}>
                  {day}
                </div>
              );
            })}
          </ContainerCalendar>
        </Container>
      </Section>
    );
  };

  return <div>{renderCalendar()}</div>;
};

export default Calendar;
