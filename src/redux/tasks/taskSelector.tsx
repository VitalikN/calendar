const getTask = (state: any) => state.tasks.tasks;
const getColor = (state: any) => state.color.selectedColors;
const taskSelector = {
  getTask,
  getColor,
};

export default taskSelector;
