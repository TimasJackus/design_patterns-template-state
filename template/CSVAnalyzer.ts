import { ITask } from "./ITask";
import AbstractAnalyzer from "./Analyzer";
import csvtojson = require("csvtojson");

class CSVAnalyzer extends AbstractAnalyzer<string> {
  async readData(path: string): Promise<ITask[]> {
    return csvtojson({ checkType: true }).fromFile(path);
  }
}

export default CSVAnalyzer;
