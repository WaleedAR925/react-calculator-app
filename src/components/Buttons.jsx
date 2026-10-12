import React from 'react'

const Buttons = ({children, onClick, className}) => {
  
  return (
    
      <button onClick ={onClick} className={`h-15 w-20 text-2xl  text-white hover:bg-gray-300 hover:text-black hover:scale-105 transition-all duration-200   ${className}`}>{children}</button>
    
  )
}

export default Buttons
