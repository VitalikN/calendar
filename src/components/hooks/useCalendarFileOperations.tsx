import { useState } from "react";
import { toast } from "react-toastify";

export const useCalendarFileOperations = () => {
  const [error, setError] = useState<string | null>(null);

  const exportCalendarToFile = (data: any) => {
    try {
      const jsonData = JSON.stringify(data);
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "calendar.json";
      link.click();
      toast.success(`Calendar exported successfully`);
    } catch (error) {
      setError("Failed to export calendar data");
    }
  };

  const importCalendarFromFile = async (file: File) => {
    try {
      const jsonData = await file.text();
      const data = JSON.parse(jsonData);
      console.log("Imported data:", data);
      toast.success(`Calendar imported successfully`);
    } catch (error) {
      setError("Failed to import calendar data");
    }
  };

  return { exportCalendarToFile, importCalendarFromFile, error };
};
