import { useRef, useState } from "react";
import "./App.css";
import "./styles/header.css";
import "./styles/button.css";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  const [result, setResult] = useState();
  const [operator, setOperator] = useState();
  const [number, setNumber] = useState();
  const [number2, setNumber2] = useState();
  // const inputRef = useRef();

  const symbols = [
    "AC",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "x",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  const signs = symbols.map((el) => {
    return (
      <Button
        operator={operator}
        setOperator={setOperator}
        number={number}
        number2={number2}
        setNumber={setNumber}
        setNumber2={setNumber2}
        result={result}
        setresult={setResult}
        value={el}
        name={el}
        showResult={showResult}
      />
    );
  });

  function showResult() {
    let firstNo = Number(number);
    let secondNo = Number(number2);

    if (operator === "/") {
      return setResult(firstNo / secondNo);
    } else if (operator === "x") {
      return setResult(firstNo * secondNo);
    } else if (operator === "-") {
      return setResult(firstNo - secondNo);
    } else {
      return setResult(firstNo + secondNo);
    }
  }

  // const showHandler = (e) => {
  //   e.preventDefault();
  //   let input = inputRef.current.value;
  //   console.log(typeof (input));
  //   console.log(firstNo, secondNo);

  // }
  return (
    <div className="App">
      <button className="dark--mode">Dark Mode</button>
      {/* <form onSubmit={showHandler} >
        <input ref={inputRef} type="text" className="form" />
        <button type="submit">show</button>
      </form> */}
      <Header
        result={result}
        number={number}
        number2={number2}
        operator={operator}
        showResult = {showResult}
      />
      <div className="grid">{signs}</div>
    </div>
  );
}

export default App;
