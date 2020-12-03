import { UserID } from "./ITasksReport";

export interface ITask {
  userId: UserID;
  id: number;
  title: string;
  completed: boolean;
}
