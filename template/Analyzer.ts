import { is } from "typescript-is";
import { ITasksReport, SingleUserReport } from "./ITasksReport";
import { ITask } from "./ITask";
import { promises } from "fs";

abstract class AbstractAnalyzer<Path> {
  async analyze(path: Path): Promise<void> {
    return this.readData(path)
      .then(this.parse)
      .then(this.validate)
      .then(this.processData)
      .then(this.writeDataToFile);
  }

  protected async readData(path: Path): Promise<unknown> {
    if (!is<string>(path)) {
      throw new Error("Path must be a string!");
    }
    try {
      const data = await promises.readFile(path, { encoding: "utf-8" });
      return Promise.resolve(data);
    } catch {
      throw new Error(`File ${path} does not exist!`);
    }
  }

  protected parse(data: unknown): ITask[] {
    return data as ITask[];
  }

  protected validate(data: ITask[]): ITask[] {
    if (!is<ITask[]>(data)) {
      throw new Error("[Validation failed] Data structure is not valid!");
    }
    return data;
  }

  protected processData(data: ITask[]): ITasksReport {
    const completed = data.reduce((previousValue, task) => {
      return previousValue + Number(task.completed);
    }, 0);
    const reportByUserMap: SingleUserReport = {};
    data.forEach((task) => {
      if (!reportByUserMap[task.userId]) {
        reportByUserMap[task.userId] = {
          completed: Number(task.completed),
          notCompleted: Number(!task.completed),
          total: 1,
        };
        return;
      }
      reportByUserMap[task.userId].completed += Number(task.completed);
      reportByUserMap[task.userId].notCompleted += Number(!task.completed);
      reportByUserMap[task.userId].total += 1;
    });
    return {
      total: data.length,
      completed: completed,
      notCompleted: data.length - completed,
      reportByUser: reportByUserMap,
    };
  }

  protected async writeDataToFile(data: ITasksReport): Promise<void> {
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const fileName =
      "report-" + year + day + hours + minutes + seconds + ".json";
    console.log("Saving data to local machine ...");
    return promises
      .writeFile("./template/output/" + fileName, JSON.stringify(data, null, 2))
      .then(() => {
        console.log(
          `${fileName} is successfully written to '/output/' directory!`
        );
      });
  }
}

export default AbstractAnalyzer;
