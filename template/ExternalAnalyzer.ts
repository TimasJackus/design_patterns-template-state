import { ITasksReport } from "./ITasksReport";
import { ITask } from "./ITask";
import fetch from "node-fetch";
import AbstractAnalyzer from "./Analyzer";

class ExternalAnalyzer extends AbstractAnalyzer<URL> {
  async readData(url: URL): Promise<ITask[]> {
    const data = await fetch(url).then((res) => res.json());
    return data;
  }

  async writeDataToFile(data: ITasksReport): Promise<void> {
    console.log("Sending some processed data to API ...");
    return super.writeDataToFile(data);
  }
}

export default ExternalAnalyzer;
