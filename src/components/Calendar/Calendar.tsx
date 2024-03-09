"use client";

import React, { useEffect, useRef, useState } from "react";

import { useGetHolidaysQuery } from "@/redux/calendar/calendarApi";
import { useDispatch, useSelector } from "react-redux";
import taskSelector from "@/redux/tasks/taskSelector";
import HeaderCalendar from "../HeaderCalendar/HeaderCalendar";
import Modal from "../Modal/Modal";
import { deleteTask, filterTasks } from "@/redux";
import colorSelector from "@/redux/color/colorSelector";

import { Container, daysOfWeek, HolidayCalendar } from "../utils";
import {
  BoxDay,
  Color,
  ColorBox,
  ContainerCalendar,
  Create,
  Delete,
  Holiday,
  Section,
  TaskBox,
  Text,
} from "./Calendar.styled";
import { useDownloadImage } from "../hooks";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [editTaskId, setEditTaskId] = useState<string | null>(null);

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
  const selectedColors = useSelector(colorSelector.getColor);

  const searchText = useSelector(taskSelector.getSearchText);

  const combinedData: { [key: string]: { holidays: any[]; tasks: any[] } } = {};

  const calendarRef = useRef<HTMLDivElement | null>(null);
  const downloadImage = useDownloadImage(calendarRef);

  const handleDownloadImage = () => {
    downloadImage();
  };

  const handleDelete = (taskId: string) => {
    dispatch(deleteTask({ id: taskId }));
  };

  if (data) {
    data?.forEach((holiday: HolidayCalendar) => {
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

  const handleBoxDayClick = (dateString: string, isTask: boolean) => {
    setSelectedDate(dateString);
    if (!isTask) {
      setMenuOpen(true);
    }
  };
  const handleTaskClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleUpdateTaskClick = (dateString: string, taskId: string) => {
    setSelectedDate(dateString);
    setEditTaskId(taskId);
    setMenuOpen(true);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);

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
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            saveImage={handleDownloadImage}
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
                <BoxDay
                  isToday={isToday}
                  key={day}
                  onClick={() => handleBoxDayClick(dateString, false)}
                >
                  {day}
                  {dayData && (
                    <Holiday onClick={(e) => handleTaskClick(e)}>
                      {dayData.holidays.map((holiday) => (
                        <TaskBox key={holiday.name}>{holiday.name}</TaskBox>
                      ))}
                      {filteredTasks?.map(({ id, title, colors }) => (
                        <TaskBox key={id}>
                          {colors?.length > 0 && (
                            <ColorBox>
                              {colors.map((color: string, index: number) => (
                                <Color color={color} key={index}></Color>
                              ))}
                            </ColorBox>
                          )}
                          <Text>{title}</Text>
                          <Create
                            onClick={() =>
                              handleUpdateTaskClick(dateString, id)
                            }
                          />
                          <Delete onClick={() => handleDelete(id)} />
                        </TaskBox>
                      ))}
                    </Holiday>
                  )}
                </BoxDay>
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
        onClose={() => {
          setMenuOpen(false);
          setEditTaskId(null);
        }}
        selectedDate={selectedDate}
        editTaskId={editTaskId}
      />
    </>
  );
};

export default Calendar;
