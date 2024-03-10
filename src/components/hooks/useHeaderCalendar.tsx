import { useDispatch } from "react-redux";
import { useCalendarFileOperations, useDownloadImage } from ".";
import { setSearchText } from "@/redux";
import { HeaderCalendarProps } from "../utils";

export const useHeaderCalendar = ({
  calendarRef,
  combinedData,
  setCurrentDate,
}: HeaderCalendarProps) => {
  const dispatch = useDispatch();
  const downloadImage = useDownloadImage(calendarRef);

  const { exportCalendarToFile, importCalendarFromFile } =
    useCalendarFileOperations();

  const handleExportClick = () => {
    exportCalendarToFile(combinedData);
  };

  const handleImportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      importCalendarFromFile(file);
    }
  };

  const handleDownloadImage = () => {
    downloadImage();
  };

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
  return {
    prevMonth,
    nextMonth,
    goToToday,
    handleSearchChange,
    handleDownloadImage,
    handleImportChange,
    handleExportClick,
  };
};
