import { useEffect, useState } from "react";
import { useGetHolidaysQuery } from "@/redux/calendar/calendarApi";
import { useSelector } from "react-redux";
import taskSelector from "@/redux/tasks/taskSelector";
import { filterTasks } from "@/redux";
import colorSelector from "@/redux/color/colorSelector";
import { HolidayCalendar } from "../utils";

export const useCalendarData = () => {
  const [combinedData, setCombinedData] = useState<{
    [key: string]: { holidays: any[]; tasks: any[] };
  }>({});

  const tasks = useSelector(taskSelector.getTask);
  const { data, error, isLoading } = useGetHolidaysQuery({
    year: 2024,
    country: "UA",
  });
  const selectedColors = useSelector(colorSelector.getColor);
  const searchText = useSelector(taskSelector.getSearchText);

  useEffect(() => {
    const processData = () => {
      const tempCombinedData: {
        [key: string]: { holidays: any[]; tasks: any[] };
      } = {};

      if (data) {
        data.forEach((holiday: HolidayCalendar) => {
          const date = new Date(holiday.date);
          const dateString = date.toISOString().split("T")[0];
          if (!tempCombinedData[dateString]) {
            tempCombinedData[dateString] = { holidays: [], tasks: [] };
          }
          tempCombinedData[dateString].holidays.push(holiday);
        });
      }

      if (Array.isArray(tasks)) {
        tasks.forEach((task) => {
          const date = new Date(task.date);
          const dateString = date.toISOString().split("T")[0];

          if (!tempCombinedData[dateString]) {
            tempCombinedData[dateString] = { holidays: [], tasks: [] };
          }
          tempCombinedData[dateString].tasks.push(task);
        });
      }

      setCombinedData(tempCombinedData);
    };

    processData();
  }, [data, tasks]);

  return { combinedData, selectedColors, searchText };
};
