import { ITask } from "./ITask";
import AbstractAnalyzer from "./Analyzer";

class JSONAnalyzer extends AbstractAnalyzer<string> {
  parse(jsonString: string): ITask[] {
    try {
      return JSON.parse(jsonString);
    } catch {
      throw new Error("Invalid JSON format!");
    }
  }
}

export default JSONAnalyzer;
