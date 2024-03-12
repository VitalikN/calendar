import { deselectColor, selectColor } from "@/redux";
import { useDispatch } from "react-redux";

export const useCheckboxColor = () => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      dispatch(selectColor(value));
    } else {
      dispatch(deselectColor(value));
    }
  };

  return { handleCheckboxChange };
};
