import { useEffect, useState } from "react";
const Calculator = () => {
    const [result, setResult] = useState('')
    const handleClick = (e) => {
        // for every click, we want the pressed button to show in the input tag. use button name
        // setResult(e.target.name) // shows only 1 digit
        setResult(result.concat(e.target.name))
        console.log(result)
    }
    const clear = () => {
        setResult("")
    }
    const backspace = () => {
        // return everything except the last element in the result state
        setResult(result.slice(0, -1)) // (0, result.length -1) works too

    }

    const calculate = () => {
        setResult(eval(result))
    }



return (
    <div className="container">
    
    <form>
      <input type="text" value={result} />
      
    </form>
    <div className="keypad">
        <button id = "clear" className = 'highlight' onClick={clear}>Clear</button>
        <button id = "backspace" onClick={backspace}>C</button>
        <button name = '/' onClick={handleClick}> &divide; </button>
        <button name = '7' onClick={handleClick}>7</button>
        <button name = '8' onClick={handleClick}>8</button>
        <button name = '9' onClick={handleClick}>9</button>
        <button name = '*' onClick={handleClick}> &times; </button>
        <button name = '4' onClick={handleClick}>4</button>
        <button name = '5' onClick={handleClick}>5</button>
        <button name = '6' onClick={handleClick}>6</button>
        <button name = '-' onClick={handleClick}> &ndash; </button>
        <button name = '1' onClick={handleClick}>1</button>
        <button name = '2' onClick={handleClick}>2</button>
        <button name = '3' onClick={handleClick}>3</button>
        <button name = '+' onClick={handleClick}>+</button>
        <button name = '0' onClick={handleClick}>0</button>
        <button name = '.' onClick={handleClick}>.</button>
        <button id = 'result' className = 'highlight' name = '=' onClick={calculate}>=</button>
        
    </div>

  </div>
)
}
export default Calculator;