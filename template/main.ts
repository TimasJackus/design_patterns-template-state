import CSVAnalyzer from "./CSVAnalyzer";
import ExternalAnalyzer from "./ExternalAnalyzer";
import JSONAnalyzer from "./JSONAnalyzer";
import XMLAnalyzer from "./XMLAnalyzer";

(() => {
  const externalAnalyzer = new ExternalAnalyzer();
  externalAnalyzer.analyze(
    new URL("https://jsonplaceholder.typicode.com/todos")
  );

  // const xmlAnalyzer = new XMLAnalyzer();
  // xmlAnalyzer.analyze("./template/test_data/tasks.xml");
  // const csvAnalyzer = new CSVAnalyzer();
  // csvAnalyzer.analyze("./template/test_data/tasks.csv");
  // const jsonAnalyzer = new JSONAnalyzer();
  // jsonAnalyzer.analyze("./template/test_data/tasks.json");
})();

process.on("uncaughtException", (error) => {
  console.error(error.message);
});
