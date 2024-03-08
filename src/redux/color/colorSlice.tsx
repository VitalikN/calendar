import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState {
  selectedColors: string[];
}

const initialState: ColorState = {
  selectedColors: [],
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    selectColor: (state, action: PayloadAction<string>) => {
      state.selectedColors.push(action.payload);
    },
    deselectColor: (state, action: PayloadAction<string>) => {
      state.selectedColors = state.selectedColors.filter(
        (color) => color !== action.payload
      );
    },
  },
});

export const { selectColor, deselectColor } = colorSlice.actions;
export default colorSlice.reducer;
