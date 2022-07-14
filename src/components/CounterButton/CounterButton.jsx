import React, {useState} from 'react';
import './CounterButton.css';

function CounterButton() {
    const [counter, setCounter] = useState(0)

  return (
    <div className='container'>
        <p className='counter'>{counter}</p>
    
    <>
        <button className='add-btn' onClick={()=> setCounter(counter+2)}>+</button>
        </>

        <>
        <button className='minus-btn' onClick={()=> setCounter(counter-2)}>-</button>
        </>

        <div className='reset'>
        <button className='reset-btn' onClick={()=> setCounter(0)} >Reset</button>
        </div>

        </div>
  
  
  )
}

export default CounterButton;