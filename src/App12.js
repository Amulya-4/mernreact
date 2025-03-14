import React from 'react'

export default function App12() {
    const arr = ["Rice","White","Sugar"]
  return (
    <ul>
        {arr.map((item)=>(
            <li>{item}</li>
        ))}
    </ul>
  )
}
