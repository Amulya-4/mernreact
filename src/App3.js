import React from 'react'

export default function App3() {
    const greet = () =>{
        alert("Hello world")
    }
    const greet1 = (value) =>{
        alert(value);
    }
    const greet2 = (value) =>{
        alert(value);
    }
    const greet3 = (value) =>{
        alert(`Hello ${value}`)
        alert(value);
    }
  return (
    <div>
        <button onClick={greet}>Greet</button><br></br>
        <button onClick={() => greet1('Hi John')}>Greet1</button><br></br>
        <input type="text" onClick={(e)=> greet2(e.target.value)}/><br></br>
        <input type="text" onClick={(e)=> greet3(e.target.value)}/>
    </div>
  )
}
