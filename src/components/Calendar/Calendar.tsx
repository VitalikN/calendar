"use client";

import React, { useState } from "react";
import { Container } from "../Container.styled";
import { ContainerCalendar, Section } from "./Calendar.styled";
import { useGetHolidaysQuery } from "@/redux/calendar/calendarApi";
import { useDispatch, useSelector } from "react-redux";
import taskSelector from "@/redux/tasks/taskSelector";
import { daysOfWeek } from "../const";
import HeaderCalendar from "../HeaderCalendar/HeaderCalendar";

interface Holiday {
  id: string;
  name: string;
  date: string;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const dispatch = useDispatch();
  const tasks = useSelector(taskSelector.getTask);
  const { data, error, isLoading } = useGetHolidaysQuery({
    year: 2024,
    country: "UA",
  });

  const combinedData: { [key: string]: { holidays: any[]; tasks: any[] } } = {};
  if (data) {
    data?.forEach((holiday: Holiday) => {
      const date = new Date(holiday.date);
      const dateString = date.toISOString().split("T")[0];
      if (!combinedData[dateString]) {
        combinedData[dateString] = { holidays: [], tasks: [] };
      }
      combinedData[dateString].holidays.push(holiday);
    });
  }

  if (Array.isArray(tasks)) {
    tasks.forEach((task) => {
      const date = new Date(task.date);
      const dateString = date.toISOString().split("T")[0];

      if (!combinedData[dateString]) {
        combinedData[dateString] = { holidays: [], tasks: [] };
      }
      combinedData[dateString].tasks.push(task);
    });
  }

  const getDaysInMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
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
          <HeaderCalendar
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
          <ContainerCalendar>
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
            {renderEmptyCells(firstDayOfMonth)}
            {days.map((day) => {
              const dateString = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                day + 1
              )
                .toISOString()
                .split("T")[0];
              const isToday =
                todayDate === day &&
                todayMonth === currentDate.getMonth() &&
                todayYear === currentDate.getFullYear();

              const dayData = combinedData[dateString];

              return (
                <div key={day} style={{ color: isToday ? "#0575e6" : "black" }}>
                  {day}
                  {dayData && (
                    <div>
                      {dayData.holidays.map((holiday) => (
                        <div key={holiday.name}>{holiday.name}</div>
                      ))}
                      {dayData.tasks.map((task) => (
                        <div key={task.id}>{task.title}</div>
                      ))}
                    </div>
                  )}
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
