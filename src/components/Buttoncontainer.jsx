import React from 'react'
import Buttons from './Buttons'
import { Delete } from 'lucide-react';


const Buttoncontainer = ({display,setdisplay,firstValue,setfirstValue,
  operator,setoperator,secondValue,setsecondValue, isResultShown, setIsResultShown}) => {
  const handleClick=(value)=>{
     const parts = display.split(/[\+\-\x\/]/);
  const currentNumber = parts[parts.length - 1];


  if (value === "." && currentNumber.includes(".")) {
    return;
  }
    if (isResultShown) {
    setdisplay(value);
    setIsResultShown(false);
    return;
  }
    if(display==="0"){
      setdisplay(value);
    }else{
      setdisplay(display+value)
    }
  }
   const handleOperator=(op)=>{
    
    
   
    if(operator===""){
      setfirstValue(display)
    }
    
    const lastChar = display[display.length-1]
    if(["+","-","x","/"].includes(lastChar)){
      setdisplay(display.slice(0,-1)+op);
      
    }
     else{
       setdisplay(display+op); 
      }

setoperator(op);
  }

  const handleEqual=()=>{
    const values = display.split(operator);
    setsecondValue(values[1]);
    let num1 = Number(firstValue);
    let num2 = Number(values[1]);
    let result;

    switch(operator){
      case "+":
        result = num1+num2;
        break;
        case "-":
          result = num1-num2;
          break;
          case "/":
  if (num2 === 0) {
    setdisplay("Error");
    setfirstValue("");
    setsecondValue("");
    setoperator("");
    setIsResultShown(true);
    return;
  }

  result = num1 / num2;
  break;
            case "x":
              result = num1*num2;
              break;
              default:
                return;

    }
    setdisplay(Number(result.toFixed(5)).toString())
    
    setfirstValue("");
    setsecondValue(""); 
    setoperator("")
    setIsResultShown(true);
  }


  return (
    <div className='h-87 w-full bg-[#0E0F19] mt-4 flex flex-col p-1 rounded-2xl shadow-2xl'>
   <div className='h-8/10 w-full  flex flex-wrap justify-center gap-x-1 gap-y-0 '>
   <Buttons onClick={()=>{
    handleClick("7")
   }}>7</Buttons>
   <Buttons onClick={()=>{
    handleClick("8")}}>8</Buttons>
   <Buttons onClick={()=>{
    handleClick("9")}}>9</Buttons>
   <Buttons onClick={()=>{
    handleOperator("+")}}>+</Buttons>
   <Buttons onClick={()=>{
    handleClick("4")}}>4</Buttons>
   <Buttons onClick={()=>{
    handleClick("5")}}>5</Buttons>
   <Buttons onClick={()=>{
    handleClick("6")}}>6</Buttons>
   <Buttons onClick={()=>{
    handleOperator("-")}}>-</Buttons>
   <Buttons onClick={()=>{
    handleClick("1")}}>1</Buttons>
   <Buttons onClick={()=>{
    handleClick("2")}}>2</Buttons>
   <Buttons onClick={()=>{
    handleClick("3")}}>3</Buttons>
   <Buttons onClick={()=>{
    handleOperator("/")}}>/</Buttons>
<Buttons
  onClick={() => {
    setdisplay("0");
    setfirstValue("");
    setsecondValue("");
    setoperator("");
  }}
>
  C
</Buttons>
   <Buttons onClick={()=>{
    handleClick("0")}}> 0</Buttons>
   <Buttons onClick={()=>{
    handleClick(".")}}>.</Buttons>
   <Buttons onClick={()=>{
    handleOperator("x")}}>x</Buttons>
   </div>
   <div className=' w-full flex justify-center px-3'>
    
    <Buttons className='bg-[#197278] w-full text-2xl text-white rounded-2xl '
    onClick={()=>{
      handleEqual();
    }}>=</Buttons>
    
   </div>
    </div>
  )
}

export default Buttoncontainer
