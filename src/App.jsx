import React, { useState } from 'react'
import Buttons from './components/Buttons'
import Screen from './components/Screen'
import Buttoncontainer from './components/Buttoncontainer'



const App = () => {
  const [display, setdisplay] = useState("0")
  const [firstValue, setfirstValue] = useState("")
  const [secondValue, setsecondValue] = useState("")
  const [operator, setoperator] = useState("")
 const [isResultShown, setIsResultShown] = useState(false);
  return (
    <div className='h-screen w-screen bg-linear-to-r from-neutral-100 to-blue-300 flex justify-center items-center'>
      <div className='h-110 w-1/4 bg-[#0E0F19] rounded-2xl shadow-2xl'>
     <Screen display={display}/>
      <Buttoncontainer 
      display = {display}
      setdisplay = {setdisplay}
      firstValue = {firstValue}
      setfirstValue = {setfirstValue}
      operator = {operator}
      setoperator={setoperator}
      secondValue = {secondValue}
      setsecondValue = {setsecondValue}
     isResultShown={isResultShown}
     setIsResultShown={setIsResultShown}
      />
      </div>
      
    </div>
  )
}

export default App
