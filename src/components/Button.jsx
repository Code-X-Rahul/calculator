
const Button = ({ value, name, setresult, result, operator, setOperator, number, setNumber, number2, setNumber2, showResult }) => {


  function Calculate() {
    if (value === "x" || value === "-" || value === "+" || value === "/") {
      setOperator(value);
      return
    } else if (value === "=") {
      showResult();
      return
    } else if (value === "AC") {
      setNumber()
      setNumber2()
      setresult()
      setOperator()
      return
    } else if (number === undefined) {
      setNumber(value)
    } else if (result === undefined && operator === undefined) {
      setNumber(prevResult => `${prevResult}${value}`)
    } else if (operator === undefined && number !== 0) {
      setNumber(prevNo => `${prevNo}${value}`)
    } else if (number2 === undefined) {
      setNumber2(value)
    } else {
      setNumber2(prevNo2 => `${prevNo2}${value}`)
    }
  }



  return (
    <button onClick={Calculate} value={value} className="btn">
      {name}
    </button>
  )
}

export default Button