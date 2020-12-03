export interface ITasksReportSummary {
  total: number;
  completed: number;
  notCompleted: number;
}

export type UserID = number;
export type SingleUserReport = Record<UserID, ITasksReportSummary>;

export interface ITasksReport extends ITasksReportSummary {
  reportByUser: SingleUserReport;
}
