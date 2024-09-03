import "./App.css";
import Test from "./Test";
import { add } from "neki-utils";
function App() {
  console.log(add(1, 2));
  return (
    <>
      <Test />
    </>
  );
}

export default App;
