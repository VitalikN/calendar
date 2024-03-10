"use client";

import React, { useRef, useState } from "react";
import { filterTasks } from "@/redux";
import HeaderCalendar from "../HeaderCalendar/HeaderCalendar";
import Modal from "../Modal/Modal";
import TasksDay from "../TasksDay/TasksDay";
import { Container, daysOfWeek } from "../utils";
import { useModal, useCalendarData } from "../hooks";
import { Section, ContainerCalendar } from "./Calendar.styled";

// import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [editTaskId, setEditTaskId] = useState<string | null>(null);

  const { combinedData, selectedColors, searchText } = useCalendarData();
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const { menuOpen, setMenuOpen, handleClose } = useModal({ setEditTaskId });

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

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
      <Section ref={calendarRef}>
        <Container>
          <HeaderCalendar
            calendarRef={calendarRef}
            combinedData={combinedData}
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

              const filteredTasks = filterTasks(
                dayData?.tasks,
                searchText,
                selectedColors
              );

              return (
                <TasksDay
                  dateString={dateString}
                  isToday={isToday}
                  key={day}
                  day={day}
                  dayData={dayData}
                  filteredTasks={filteredTasks}
                  setMenuOpen={setMenuOpen}
                  setSelectedDate={setSelectedDate}
                  setEditTaskId={setEditTaskId}
                />
              );
            })}
          </ContainerCalendar>
        </Container>
      </Section>
    );
  };

  return (
    <>
      {renderCalendar()}
      <Modal
        isOpen={menuOpen}
        onClose={() => handleClose()}
        selectedDate={selectedDate}
        editTaskId={editTaskId}
      />
    </>
  );
};

export default Calendar;
