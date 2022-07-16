import React from 'react'
import '../App.css'
export default function button(props) {
    let btnColor={
        backgroundColor: props.theme==='light'?'':'#bc986a',
        color:props.theme==='light'?'#bc986a':'white'
      }
  return (
    <>
        <button style={btnColor} className="AC" value="AC" onClick={props.clear}>
          AC
        </button>
        <button style={btnColor} className="" value="DEL" onClick={props.del}>
          DEL
        </button>
        <button style={btnColor} className="span-one" value="/" onClick={props.clickHandler}>
          ÷
        </button>
        <button style={btnColor} className="span-one" value="1" onClick={props.clickHandler}>
          1
        </button>
        <button style={btnColor} className="span-one" value="2" onClick={props.clickHandler}>
          2
        </button>
        <button style={btnColor} className="span-one" value="3" onClick={props.clickHandler}>
          3
        </button>
        <button style={btnColor} className="span-one" value="*" onClick={props.clickHandler}>
          *
        </button>
        <button style={btnColor} className="span-one" value="4" onClick={props.clickHandler}>
          4
        </button>
        <button style={btnColor} className="span-one" value="5" onClick={props.clickHandler}>
          5
        </button>
        <button style={btnColor} className="span-one" value="6" onClick={props.clickHandler}>
          6
        </button>
        <button style={btnColor} className="span-one" value="+" onClick={props.clickHandler}>
          +
        </button>
        <button style={btnColor} className="span-one" value="7" onClick={props.clickHandler}>
          7
        </button>
        <button style={btnColor} className="span-one" value="8" onClick={props.clickHandler}>
          8
        </button>
        <button style={btnColor} className="span-one" value="9" onClick={props.clickHandler}>
          9
        </button>
        <button style={btnColor} className="span-one" value="-" onClick={props.clickHandler}>
          -
        </button>
        <button style={btnColor} className="span-one" value="." onClick={props.clickHandler}>
          .
        </button>
        <button style={btnColor} className="span-one" value="0" onClick={props.clickHandler}>
          0
        </button>
        <button style={btnColor} className="equal" onClick={props.calculate}>
          =
        </button>
    </>
  )
}
