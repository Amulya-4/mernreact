import React from 'react'
import "./App2.css"
export default function App2(props) {
  let city = "Hyderabad"
  let a = 10;
  let b = 20;
  return (
    <div className="App2">
        <h3>Hello {props.name}! Welcome to Mystore!</h3>
        <p className="txtStyle">
        Age:{props.age},{city}<br></br>
        Sum:{a+b}<br></br>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making 
        it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
        words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        </p>
    </div>
  )
}
