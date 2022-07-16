import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import "./App.css";
export default function App() {
  const [result, setResult] = useState("");
  const clickHandler = (event) => {
    console.log(result);
    setResult(result.concat(event.target.value));
  };
  const clear = () => {
    setResult("");
  };
  const del = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };
  const [theme,setTheme] = useState("light");
    const changeTheme=(event)=>
    {
        if(event.target.value==="light")
        {
            document.body.style.background=" linear-gradient(to right, #000000, #FBEEC1)"
            document.body.style.color="white";
            setTheme("dark");
        }
        else
        {
            document.body.style.background="linear-gradient(to right, #659dbd, #FBEEC1)";
            document.body.style.color="black";
            setTheme("light");
        }
    }
  return (
    <div>
      <Navbar title ={"Calculator"} changeTheme = {changeTheme} theme = {theme}/>
      <div className="calculator-grid">
        <div className="output" style={{backgroundColor:theme==='light'?'white':'#353935',
        color:theme==='light'?'black':'white'
        }}>
          <div className="previous-operand"></div>
          <div className="current-operand" style={{
        color:theme==='light'?'#bc986a':'white'
        }} >{result}</div>
        </div>
        <Button calculate = {calculate} del = {del} clear = {clear} clickHandler = {clickHandler} changeTheme = {changeTheme} theme = {theme}/>
      </div>
    </div>
  );
}
