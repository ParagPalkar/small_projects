import React from 'react'

const Numbers = () => {

    const numArr = [];
        for(let i = 0; i<=31 ; i++){
            numArr.push(i);
        }

        const getColor = (number) => (
            number % 2 === 0 ? 'green' : 'red'
        );  

  return (
    <>
    <div>Numbers</div>
    <div className="section">
    {
        numArr.map((number)=>(
            <h2 className='numbers' key={number} style={{ backgroundColor: getColor(number) }}>
                {number}
                </h2>
        ))
    }
    </div>
    
    </>
    
    
  )
}

export default Numbers