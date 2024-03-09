import { useDispatch } from "react-redux";
import {
  BoxInputColor,
  ColorIndicator,
  ColorInput,
  ColorOption,
  Label,
} from "./CheckboxColor.styled";
import { deselectColor, selectColor } from "@/redux/color/colorSlice";

const CheckboxColor = () => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      dispatch(selectColor(value));
    } else {
      dispatch(deselectColor(value));
    }
  };

  return (
    <BoxInputColor>
      <Label>Search task by color:</Label>
      <ColorOption>
        <ColorInput
          type="checkbox"
          name="color"
          value="red"
          onChange={handleCheckboxChange}
        />
        <ColorIndicator color="#f52222" />
      </ColorOption>
      <ColorOption>
        <ColorInput
          type="checkbox"
          name="color"
          value="green"
          onChange={handleCheckboxChange}
        />
        <ColorIndicator color="#01d101" />
      </ColorOption>
      <ColorOption>
        <ColorInput
          type="checkbox"
          name="color"
          value="blue"
          onChange={handleCheckboxChange}
        />
        <ColorIndicator color="#3471f6" />
      </ColorOption>
    </BoxInputColor>
  );
};
export default CheckboxColor;
