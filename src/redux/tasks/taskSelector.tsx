const getTask = (state: any) => state.tasks.tasks;
const getSearchText = (state: any) => state.tasks.searchText;

const taskSelector = {
  getTask,
  getSearchText,
};

export default taskSelector;
