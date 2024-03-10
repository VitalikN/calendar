import {
  BoxDay,
  Color,
  ColorBox,
  Create,
  Delete,
  Holiday,
  TaskBox,
  Text,
} from "../Calendar/Calendar.styled";
import { useTasksDay } from "../hooks";
import { TasksDayProps } from "../utils";

const TasksDay: React.FC<TasksDayProps> = ({
  filteredTasks,
  isToday,
  day,

  dayData,
  dateString,
  setSelectedDate,
  setMenuOpen,
  setEditTaskId,
}) => {
  const {
    handleUpdateTaskClick,
    handleDelete,
    handleTaskClick,
    handleBoxDayClick,
  } = useTasksDay({ setSelectedDate, setMenuOpen, setEditTaskId });
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
              <Create onClick={() => handleUpdateTaskClick(dateString, id)} />
              <Delete onClick={() => handleDelete(id)} />
            </TaskBox>
          ))}
        </Holiday>
      )}
    </BoxDay>
  );
};
export default TasksDay;
