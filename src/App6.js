import React from 'react'
import "./App6.css"
export default function App6() {
    const mystyle = {
        backgroundColor : "pink"
    }
  return (
    <div>
        <h1 style={{backgroundColor: "lightcoral" }}>Hello World</h1>
        <h1 style={mystyle}>Good Morning prnds</h1>
        <h1 className="myStyle1">Happy holi</h1>
    </div>
  )
}
