import React, { useContext } from 'react'
import { UserContext } from './App25'
export default function Grandchild(props) {
     const {email} = useContext(UserContext)
  return (
    <div>This is Grandchild: {email}</div>
  )
}