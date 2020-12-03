import { ITask } from "./ITask";
import AbstractAnalyzer from "./Analyzer";
import * as parser from "xml2json";

class XMLAnalyzer extends AbstractAnalyzer<string> {
  parse(xmlString: string): ITask[] {
    const data: ITask[] = parser.toJson(xmlString, {
      object: true,
      coerce: true,
    }).tasks["task"];
    return data;
  }
}

export default XMLAnalyzer;
