import React, { useState } from 'react'

const HexaDec = () => {
  const colors = [];
  console.log(colors);

for (let i = 0; i < 32; i++) {
  const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  colors.push({ color: hexColor });
}
  const [color ,setColor] = useState('burlywood');
  const handleClick = () =>{
      setColor('red')
  }

  return (
    <>
    <h1>Hexa Decimal colors</h1>
        <button onClick={handleClick}>Change background</button>
      <div className="hexa" style={{backgroundColor : color}} >
      {
        colors.map((col,index)=>(
          <p key={index} style={{backgroundColor : col.color}} >{col.color}</p>
        ))
      }
      </div>
      
    </>
    
  )
}

export default HexaDec